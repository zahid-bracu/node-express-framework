const express=require('express'); 
const path=require('path');
const hbs=require('hbs');
const app=express(); 
const PORT = process.env.PORT || 9000;

const viewsPath=path.join(__dirname,'./templates/views');
const partialsPath=path.join(__dirname,'./templates/partials');

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

// dynamic components
app.get("/",(req,res)=>{
    res.render('index',{
        placeholder:"Md. Zahidur Rahman"
    })
})


app.get("/about",(req,res)=>{
    res.render('about',{
        placeholder:"Md. Zahidur Rahman"
    })
})


app.get("*",(req,res)=>{
    res.render("404",{
        errorMessage:"The page is not found",
        placeholder:"Md. Zahidur Rahman"
    })
})


app.listen(PORT,()=>{
    console.log(`Testing ${PORT}`);
})