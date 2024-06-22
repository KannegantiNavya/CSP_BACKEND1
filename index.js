const app=require('./requires');
const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`listening on port http://localhost:${port}`);
});