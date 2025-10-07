import express from "express";
import users from "../data/user.js";

const router = express.Router();

// List all users
router.get("/", (req, res) => {
  res.render("users", { users });
});

// Show "Add New User" form
router.get("/new", (req, res) => {
  res.render("addUser");
});

// Handle adding a new user
router.post("/new", (req, res) => {
  const { name, userName, email } = req.body;

  // Check if userName already exists
  const existingUser = users.find(u => u.userName === userName);
  if (existingUser) {
    return res.status(400).send("UserName already exists");
  }

  const id = users.length + 1;
  users.push({ id, name, userName, email });

  res.redirect("/users");
});

router.get("/:userName/applications/add", (req, res) => {
    const { userName } = req.params;
    const user = users.find(u => u.userName === userName);
    if (!user) return res.status(404).send("User not found");
  
    res.render("addApplication", { user }); // pass user info to the form
  });

export default router;