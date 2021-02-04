const express=require('express');
const app=express();


// app.set('view engine','hbs');

app.set('views','../views');
app.set('view engine', 'hbs')


// view file is showing
app.get("/",(req,res)=>{
    res.render('index');
    console.log("working")
});


app.get("/",(req,res)=>{
    res.send('Normal file is showing....');
});








app.listen(8000,()=>{
    console.log("Listening to port 6000");
})