const express=require('express'); 
const path=require('path');
const hbs=require('hbs'); //hbs import
const app=express(); 
const PORT = process.env.PORT || 9000; //port set

app.use(express.static(__dirname+'/public'));

// path set
const viewsPath=path.join(__dirname,'./templates/views');
const partialsPath=path.join(__dirname,'./templates/partials');

// path connect
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

// hbs set
app.set('view engine', 'hbs');



// dynamic components
app.get("/",(req,res)=>{
    res.render('index',{
        placeholder:"Md. Zahidur Rahman"
    })
})


app.get("/about",(req,res)=>{

    // props send
    res.render('about',{
        placeholder:"Md. Zahidur Rahman"
    })
})


// wrong page set
app.get("*",(req,res)=>{
    res.render("404",{
        errorMessage:"The page is not found",
        placeholder:"Md. Zahidur Rahman"
    })
})


app.listen(PORT,()=>{
    console.log(`Testing ${PORT}`);
})