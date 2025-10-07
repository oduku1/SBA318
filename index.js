import express from "express";
import addApplicationRoutes from "./routes/addApplicationRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import userRoutes from "./routes/userRoutes.js"
import noteRoutes from "./routes/noteRoutes.js"

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());

app.use("/api/applications", applicationRoutes);
app.use("/api/applications/add", addApplicationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);


app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});