const express = require("express");
const app = express();

app.use(express.json());

// Simple route for health check
app.get("/", (req, res) => {
  res.json({ message: "Welcome to CI/CD demo app 🚀" });
});

// Another example route
app.get("/api/hello", (req, res) => {
  res.json({ success: true, data: "Hello, Priyanshu!" });
});

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
