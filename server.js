require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const reportRoutes = require('./routes/reportRoutes');  // ← UNCOMMENT THIS

app.use(express.json());
app.use(cors());

// Health
app.get("/api/health", (req, res) => {
  const dbStatus = db && db.threadId ? "connected" : "initialized";
  res.json({ status: 'ok', db: dbStatus, time: new Date().toISOString() });
});

// Routes
app.use("/api", authRoutes);
app.use('/api', reportRoutes);  // ← UNCOMMENT THIS & MOVE HERE

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// REMOVE THESE LINES FROM THE BOTTOM:
// const reportRoutes = require('./routes/reportRoutes');
// app.use('/api', reportRoutes);