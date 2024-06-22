const oracledb = require('oracledb');
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:/orcl",
};
const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {

  let Sql, Message;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  console.log(Details);

  // if(typeof Parameters[2] === 'string') {
  //   Details = eval(`(${Parameters[2]})`); 
  // }
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.soil_type}','${Details.ph_range}','${Details.sunlight}','${Details.watering}','${Details.fertilizer}','${Details.height}','${Details.plant_name}','${Details.oxygen_level}','${Details.img_url}')`;
      Message = "Inserted Successfully";
      break;
    case "Read":
      Sql = `select * from ${Parameters[0]} where plant_name = '${Details}'`;
      Message = `${Details} Retrived`
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set ph_range = '${Parameters[3].ph_range}',watering = '${Parameters[3].watering}',soil_type= '${Parameters[3].soil_type}',sunlight= '${Parameters[3].sunlight}',fertilizer = '${Parameters[3].fertilizer}',height = ${Parameters[3].height} where plant_name = '${Details}'`;
      Message = `Succes Updating from details to reentered details`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where plant_name = '${Details}'`;
      Message = `Success deleting ${Details}`;
      break;

    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};

const signup = async (...Parameters) => {
  let sql, Message;
  console.log(Parameters[2]);
  Details = Parameters[2];
  switch (Parameters[1]) {
    case "insert":
      sql = `insert into ${Parameters[0]} values('${Details.yourname}','${Details.email}','${Details.password}')`;
      Message = "inserted successfully";
      break;
    case "Read":
      sql = `select * from ${Parameters[0]} where email = '${Details}'`;
      Message = `${Details} Retrived`
      break;
  }
  console.log(sql);
  var result = await Query(sql);
  result.Message = Message;
  return result;
};

const login = async (...Parameters) => {
  let sql, Message;
  console.log(Parameters[2]);
  Details = Parameters[2];
  switch (Parameters[1]) {
    case "Read":
      sql = `select * from ${Parameters[0]} where email = '${Details}'`;
      Message = `${Details} Retrived`
      break;
  }
  console.log(sql);
  var result = await Query(sql);
  result.Message = Message;
  return result;
};

const sellplant = async (...Parameters) => {
  // console.log("hey error");

  let Sql, Message;
  console.log(typeof (Parameters[2]));

  Details = Parameters[2];
  console.log(Details);
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.p_id}','${Details.p_image}','${Details.p_name}','${Details.p_type}','${Details.p_cost}')`;
      Message = "Inserted Successfully";
      break;
    case "Read":
      Sql = `select * from ${Parameters[0]}`;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where p_i = '${Details}'`;
      }
      break;
    case "Read1":
      Sql = `select * from ${Parameters[0]}`;
      if (Details != "All") {
        Sql = `select * from ${Parameters[0]} where p_name = '${Details}'`;
        Message = `${Details} Retrived`

      }
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set p_i = '${Parameters[3].p_id}',p_image = '${Parameters[3].p_image}',p_name= '${Parameters[3].p_name}',p_type= '${Parameters[3].p_type}',p_cost = ${Parameters[3].p_cost} where p_i = '${Details}'`;
      Message = `Succes Updating from details to reentered details`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where p_i = '${Details}'`;
      Message = `Success deleting ${Details}`;
      break;

    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};

const contactus = async (...Parameters) => {
  // console.log("hey error");

  let Sql, Message;
  console.log(typeof (Parameters[2]));

  Details = Parameters[2];
  console.log(Details);
  switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.email}','${Details.phone}','${Details.message}')`;
      Message = "Inserted Successfully";
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};

const example = async (...Parameters) => {
  let Sql, Message;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  switch (Parameters[1]) {
    case "Read":
      Sql = `select * from ${Parameters[0]} where p_type= '${Details}'`;
      Message = `${Details} Retrived`
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};
module.exports = {
  Result: Result,
  signup: signup,
  login: login,
  sellplant: sellplant,
  contactus: contactus,
  example: example
};

