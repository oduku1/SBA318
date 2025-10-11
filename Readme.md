# 🧾 Job Applications Tracker (Express + EJS)

A full-stack **Express.js** web app that allows users to manage and track job applications.  
It uses **EJS templates** for rendering pages and keeps data organized through modular routes and simple JS data files.

---

## 📂 Project Structure

```
SBA-JobApplications/
│
├── data/
│   ├── applications.js        # Job applications data
│   └── user.js                # User data
│
├── routes/
│   ├── applicationRoute.js    # Routes for job applications (CRUD)
│   └── userRoutes.js          # Routes for user actions (view, add, etc.)
│
├── views/
│   ├── addApplication.ejs     # Form to add a job application
│   ├── addUser.ejs            # Form to add a new user
│   ├── applications.ejs       # Displays a user’s job applications
│   ├── editApplication.ejs    # Edit an existing job application
│   ├── home.ejs               # Homepage
│   ├── notes.ejs              # Notes or extra content page
│   └── users.ejs              # Displays list of users
│
├── public/
│   └── styles.css             # Optional styles
│
├── index.js                   # Main Express server entry point
├── package.json               # Dependencies and scripts
├── package-lock.json
├── .gitignore                 # Git ignore file
└── README.md                  # Project documentation
```

---

## 🚀 Features

- 👤 Create and list users  
- 📝 Add, edit, and view job applications per user  
- 🧩 Organized EJS templates for server-side rendering  
- 🔗 Dynamic routing between users and their job applications  
- 🎨 Custom CSS styling  

---

## 🛠️ Technologies Used

| Category | Technology |
|-----------|-------------|
| Backend | [Express.js](https://expressjs.com/) |
| Frontend | [EJS](https://ejs.co/) |
| Styling | CSS |
| Data | Local JS files (`data/` folder) |
| Runtime | Node.js |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/SBA-JobApplications.git
   cd SBA-JobApplications
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   node index.js
   ```
   or, if you have nodemon:
   ```bash
   nodemon index.js
   ```

4. **Visit in your browser**
   ```
   http://localhost:3000
   ```

---

## 🧭 Routes Overview

### 👥 User Routes (`routes/userRoutes.js`)

| Method | Path | Description |
|---------|------|-------------|
| `GET` | `/users` | Display all users |
| `GET` | `/users/new` | Show add-user form |
| `POST` | `/users/new` | Add a new user |
| `GET` | `/users/:userName/applications` | Show job applications for a specific user |
| `GET` | `/users/:userName/applications/add` | Show add-application form for a specific user |

---

### 💼 Application Routes (`routes/applicationRoute.js`)

| Method | Path | Description |
|---------|------|-------------|
| `POST` | `/applications/add` | Add a new job application (general) |
| `GET` | `/applications/add/:userName` | Show add form for a specific user |
| `POST` | `/applications/add/:userName` | Submit a new application tied to a user |
| `GET` | `/applications/:userName/:id/edit` | Show edit form for a specific application |
| `POST` | `/applications/:userName/:id/edit` | Update an existing job application |

---

## 🧠 Example Data

```js
// user.js
[
  { id: 1, name: "Omar Dukureh", userName: "omard", email: "omar@example.com" }
]

// applications.js
[
  {
    id: 1,
    userName: "omard",
    company: "OpenAI",
    position: "Backend Developer",
    status: "Interview Scheduled",
    dateApplied: "2025-10-01",
    notes: "Follow up next week"
  }
]
```

---

## 💡 Future Enhancements

- 🔐 Add login/authentication  
- 🔎 Search and filter job applications  
- ☁️ Connect to MongoDB for persistent storage  
- 📊 Add analytics or visual tracking for job progress  

---

## 👨‍💻 Author

**Omar Dukureh**  
💼 [github.com/oduku1](https://github.com/oduku1)
