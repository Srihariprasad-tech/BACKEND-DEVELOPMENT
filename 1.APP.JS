const express=require("express");
const app=express();
app.use(express.json()); // used to read json data, will read req.body

// CREATING DATA//
let students=[
    {
        id:1,name:"srihari"
    },
    {
        id:2, name:"tejas"
    }
];

// READ OPERRATION//

app.get("/students",(req,res)=>
{
    res.send(students);
});

// CREATE OPEATION USING POST 
// ADDING NEW STUDENTSS//

app.post("/students",(req,res)=>
{
    students.push(req.body);       // we have to use postman
    res.send("STUDENT IS ADDED")
});

// UPDATE OPEARTION USING PUT

app.put("/students/:id",(req,res)=>
{
    let id=req.params.id;
    let newname=req.body.name;
    students.forEach((student)=>
    {
        if(student.id==id)
        {
            student.name=newname;
        }
    });
    res.send("STUDENT UPDATED");
});

// DELETE OPERATION USING DELETE//

app.delete("/students/:id",(req,res)=>
{
    let id=req.params.id;
    students=students.filter((student)=>
    {
        return student.id!=id;
    });
    res.send("STUDENT DELETED");
});




app.listen(3000,()=>
{
    console.log("SERVER STARTED");
});