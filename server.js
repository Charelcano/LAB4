require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(cors());

// Health
app.get("/api/health", (req, res) => {
  const dbStatus = db && db.threadId ? "connected" : "initialized";
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

//Routes
//const authRoutes = require('./routes/authRoutes');

app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
