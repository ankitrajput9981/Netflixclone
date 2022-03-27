const express=require('express');
const path=require('path');
const Contact = require("./src/contact");
require("./src/conn");
const app=express();

const port= process.env.PORT || 3000;


const {MongoClient} = require('mongodb');
const { Collection } = require("mongoose");
const url = 'mongodb+srv://Ankit7987:<Iiitg@123>@cluster0.ggmky.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritmongodb+srv://Ankitr9981:Iiitg123@cluster0.ggmky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const databaseName = "portfolio";
const client = new MongoClient(url);





const static_path =path.join(__dirname,'views');
app.use((express.static(static_path )));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("views",static_path);


app.get("",(req,res)=>{
    res.render('front');
});
app.get("/index",(req,res)=>{
    res.render('index');
});


app.get("/login",(req,res)=>{
    res.render('login');
});

app.get("/singup",(req,res)=>{
    res.render('singup');
});
app.get("/login",(req,res)=>{
    res.render('login');
});

app.get("/:id",(req,res)=>{
    res.render('about');
});



app.post("/singup",async(req,res)=>{
    try{
        const addingcontactData = new Contact(req.body)
        console.log(req.body);
        addingcontactData.save();
        res.redirect("/login");
    } catch(err){
        res.send(err);
    }
 });
//  login check

app.post("/login",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        // console.log(`${email} ${password}`);
        const useremail = await Contact.findOne({email:email});
        // res.send(useremail.password);
        // console.log(useremail);
        if(useremail.password=== password)
        {
            console.log(useremail.firstname);
            res.status(201).render('index',{
                dataname: useremail.firstname
            });
        }else{
            res.send("Invalid login details");
        }

    }
    catch(err) {
        res.send("Invalid login details")
    }
})




app.use((req, res) => {
    res.json("404");
})



// login cehc

app.listen(port,()=>{
    console.log(`listening to the port no at ${port}`);

});



// extraaaa work
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 

// 
// 
// 
// 


// 
// 
// 
