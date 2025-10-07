import express from "express";

const app = express();



app.set("view engine", "ejs"); // tells Express to use EJS
app.set("views", "./views");  
app.use(express.json())

app.get("/",(req,res)=>{
    res.render("home")
})




app.listen(3000, () => {
    console.log("Listening on port 3000");
  });