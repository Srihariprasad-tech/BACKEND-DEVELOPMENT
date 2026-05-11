const express=require("express");
const mongoose=require("mongoose");
const app=express();

app.use(express.json());//Converts incoming JSON data into JavaScript objects.

// conncetion to mongodb database//

mongoose.connect("mongodb://localhost:27017/studentDB")
.then(()=>
{
console.log("DATABASE IS CONNECTED");
})
.catch((err)=>
{
    console.log(err);
});

// address//
app.get("/",(req,res)=>
{
    res.send("SERVER IS RUNNING");
});

//port //
app.listen(3000,()=>
{
    console.log("server is started");
});

// CREATING A SCEHMA//

const studentschema=new mongoose.Schema({  // creating a new schema called studentschema//
    name:String,
    age:Number,
    city:String
});

// creating model

const Student=mongoose.model("student",studentschema);

//insert document//

const createstudent=async ()=> // beacuse database opearion takes time so//
{
    const student1=new Student({
        name:"srihariprasad",
        age:18,
        city:"banglore"
    });
    const student2=new Student({
        name:"suhas",
        age:18,
        city:"hospet"
    });
    const student3=new Student({
        name:"kushal",
        age:18,
        city:"Raichur"
    });
 await student1.save();
 await student2.save();
 await student3.save();
 console.log("STUDENT SAVED");
};

createstudent();

// GETTING ALL DOCUMENTS MEANS DATA FROM THE DATA  BASE//
const getstudents= async()=>
{
    const data=await Student.find(); //Find all documents from students collection
    console.log(data);
}
getstudents();

// Gets ONE document.

const getsingle=async()=>
{
    const data=await Student.findOne({
        name:"srihariprasad"
    });
    console.log(data);
}
getsingle();


// update the document//

const updatestudent=async()=> // updateone takes two objects where 1st object which document to finfd and seconf one is wht to change//
{
    await Student.updateOne(
        {name:"srihariprasad"},
        {age:19},
    );
    console.log("UPDATED");
};
updatestudent();

//DELETE the document//
 const deletestudent=async()=>
 {
    await Student.deleteOne
    ({
        name:"srihariprasad"
    });
 };
 deletestudent();


 // VALADATION//

 const studentschema=new mongoose.Schema({
    name:{
        type:String,
    required:true //Means field MUST exist
    },
    age:{
        type:Number,
        required:true
    },
    city:
    {
        type:String,
        required:true
    }
 });


