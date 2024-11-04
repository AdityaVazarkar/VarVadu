import express from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Aditya@02",
  database: "matromonial",
});



app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO register1 (name, email, password) VALUES(?)";
    const Values =[
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql ,[Values],(err,result)=>{
        if(err) return res.json({Message:"Error in Node"});
        return res.json(result);

    })
})

app.post('/login',(req ,res)=>{
    const sql = "SELECT * FROM register1 where email = ? and password = ?";
    db.query(sql,[req.body.email ,req.body.password] , (err , result) =>{
        if(err) return res.json({Message:"Error inside server"});
        if(result.length > 0){
            return res.json({Login:true})
        }else{
            return res.json({Login:false})
        }
    })
})



app.post("/enroll",cors(),async (req,res)=>{
    const sql = "INSERT INTO info (`fullname` , `email` ,`phnumber` , `address` ,`pin`,`complexion` ,`date` ,`height`,`pydisability`,`subcast`,`bloodgroup`, `maritalstatus`, `diet`,`lens`,`spectacle`,`gender`,`disability` ) VALUES (?)";
   
    const Values = [
      req.body.fullname, 
      req.body.email,
      req.body.phnumber,
      req.body.address,
      req.body.pin,
      req.body.complexion,
      req.body.date,
      req.body.height,
      req.body.pydisability,
      req.body.subcast,
      req.body.bloodgroup,
      req.body.maritalstatus,
      req.body.diet,
      req.body.lens,
      req.body.spectacle,
      req.body.gender,
      req.body.disability
    ];
     db.query(sql , [Values] , (err, result) =>{
      console.log("Error  ",err);
      if(err) return res.json({"Message":"Error in Node"},err);
      return res.json(result);
    });
  });


  app.post("/enroll1",cors(),async (req,res)=>{
    const sql = "INSERT INTO info2 (`rashi` , `nakshatra` ,`charan` , `nadi` ,`gan`,`mangal` ,`educationarea` ,`education`,`occupationtype`,`occupationdetails`,`income`, `workingcity`, `ifmore`,`pan`,`residence`,`email1`,`email2`,`mobile1`,`mobile2`,`phone1`,`phone2` ) VALUES (?)";
   
    const Values = [
      req.body.rashi, 
      req.body.nakshatra,
      req.body.charan,
      req.body.nadi,
      req.body.gan,
      req.body.mangal,
      req.body.educationarea,
      req.body.education,
      req.body.occupationtype,
      req.body.occupationdetails,
      req.body.income,
      req.body.workingcity,
      req.body.ifmore,
      req.body.pan,
      req.body.residence,
      req.body.email1,
      req.body.email2,
      req.body.mobile1,
      req.body.mobile2,
      req.body.phone1,
      req.body.phone2,
    ];
     db.query(sql , [Values] , (err, result) =>{
      console.log("Error  ",err);
      if(err) return res.json({"Message":"Error in Node"},err);
      return res.json(result);
    });
  });

  app.post("/enroll2",cors(),async (req,res)=>{
    const sql = "INSERT INTO info3 (`father` , `mother` ,`brother` , `sister` ,`married_brother`,`married_sister` ,`fathername` ,`mothername`,`fatheroccupation`,`motheroccupation`, `first_photo`, `second_photo`) VALUES (?)";
   
    const Values = [
      req.body.father, 
      req.body.mother,
      req.body.brother,
      req.body.sister,
      req.body.married_brother,
      req.body.married_sister,
      req.body.fathername,
      req.body.mothername,
      req.body.fatheroccupation,
      req.body.motheroccupation,
      req.body.first_photo,
      req.body.second_photo
     
    ];
     db.query(sql , [Values] , (err, result) =>{
      console.log("Error  ",err);
      if(err) return res.json({"Message":"Error in Node"},err);
      return res.json(result);
    });
  });

  



app.get('/userData1', function (req, res) {

    const sql = "Select * from info2";
    db.query(sql, function (err,result){
      if(err) return console.log(err);
     
      return res.json(result);
    })
  
  })

app.get('/userData3', function (req, res) {

    const sql = "Select * from info3";
    db.query(sql, function (err,result){
      if(err) return console.log(err);
     
      return res.json(result);
    })
  
  })

  app.get('/userdata',function(req,res){
  
    const sql = `SELECT info.*, info2.* FROM info JOIN info2 ON info.email = info2.email1;`;
    db.query(sql, function (err,result){
      if(err) console.log(err);
      res.json(result);
    })
  
  })

  
  app.get('/search', function (req, res) {
    const { gender, address, fromage, toage, subcast } = req.body; // Extract request body parameters
    
    const sql = `
      SELECT *,
      TIMESTAMPDIFF(YEAR, date, CURDATE()) AS age
      FROM info
      WHERE (gender = ? OR ? = '')
      AND (address LIKE ? OR ? = '')
      AND (subcast = ? OR ? = '')
      AND (TIMESTAMPDIFF(YEAR, date, CURDATE()) BETWEEN ? AND ?)
    `;
      
    const params = [gender, gender, `%${address}%`, address, subcast, subcast, fromage, toage]; // Parameters to pass to the query

    db.query(sql, params, function (err, result) { // Using parameters to avoid SQL injection
        if (err) {
            console.error('Error executing SQL query:', err);
            return res.status(500).json({ error: 'Internal server error' }); // Send error response
        }
        console.log('SQL query executed successfully');
        console.log('Query result:', result);
        res.json(result); // Send query result as JSON response
    });
});







app.listen(5000, () => {
  console.log("Connected to the server");
});
