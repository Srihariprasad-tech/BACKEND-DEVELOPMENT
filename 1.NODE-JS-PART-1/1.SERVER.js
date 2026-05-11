// creating a basic local host server//

const express=require("express");
const app=express();

// STARTING THE PORT //
let port=3000;

app.listen(port,()=>
{
console.log("SERVER IS ACTIVATED AT PORT NO 3000");
});

// ADDRESS 
app.get("/",(req,res)=>
{
    res.send("HIII THIS IS BACKEND !");
});

app.get("/work",(req,res)=>
{
    res.send("YOU HAVE TO LEARN BACKEND DEVELOPMENT");
});


// CREATING EJS CODE 1//
const path=require("path"); // this is used to work with different files,folders which is understood by the nodejs
app.set("view engine","ejs"); // this is used to understand to nodejs tht you are using ejs 
app.set("views",path.join(__dirname,"1.EJS"));//this is a folder which is searched by nodejs

app.get("/game",(req,res)=>
{
    res.render("1.game.ejs"); // file name 
});       

// creating EJS CODE 2/
app.set("views",path.join(__dirname,"2.EJS"));

app.get("/game2",(req,res)=>
{
    let num=Math.floor(Math.random()*10);
    res.render("2.game.ejs",{num});
});

// creating EJS CODE 3 //
// ADDING CSS TO IT//
app.use(express.static("1.CSS"));// allow to acces the CSS files inside 1.CSS FOLDER//


app.use(express.urlencoded({extended:true})); //Used to read form data
 //CREATING A POST REQUEST//

 app.get("/post",(req,res)=>
{
res.send(`
    <form method="post" action="/submit">
    <input type="text" name="username">
    <button>send</button>
    </form>
    `);
});
app.post("/submit",(req,res)=>
{
    console.log(req.body);
    res.send("DATA RECIVED");
});
