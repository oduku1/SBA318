import express from "express";
import applications from "../data/applications.js";

const router = express.Router();

// Show add new application form
router.get("/add", (req, res) => {
  res.render("addApplication");
});

// Handle adding new application
router.post("/add", (req, res) => {
  const { userName, company, position, status, dateApplied, notes } = req.body;
  const id = applications.length + 1;
  applications.push({ id, userName, company, position, status, dateApplied, notes });
  res.redirect(`/users/${userName}/applications`);
});

// Show edit form for a specific application
router.get("/:userName/:id/edit", (req, res) => {
  const { userName, id } = req.params;
  const application = applications.find(
    a => a.id === parseInt(id) && a.userName === userName
  );
  if (!application) return res.status(404).send("Application not found");
  res.render("editApplication", { application });
});

// Handle edit submission
router.post("/:userName/:id/edit", (req, res) => {
  const { userName, id } = req.params;
  const application = applications.find(
    a => a.id === parseInt(id) && a.userName === userName
  );
  if (!application) return res.status(404).send("Application not found");

  const { company, position, status, notes } = req.body;
  application.company = company;
  application.position = position;
  application.status = status;
  application.notes = notes;

  res.redirect(`/users/${userName}/applications`);
});

export default router;
