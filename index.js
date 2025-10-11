import express from "express";
import applicationRoutes from "./routes/applicationRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import users from "./data/user.js"; 


const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/applications", applicationRoutes);
app.use("/users", userRoutes);


app.get("/", (req, res) => {
    res.render("home", { users }); // pass the users array to EJS
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});