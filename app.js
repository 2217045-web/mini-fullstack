// Intro/app.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Allow frontend (React) to talk to backend
app.use(cors());

// Simple API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express Backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
