const mongoose =  require("mongoose");
mongoose.connect("mongodb+srv://Ankitr9981:Iiitg123@cluster0.ggmky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true
    
}).then(()=>{
    console.log(`connetion successful`);
}).catch((err)=>{
    console.log(err);
})