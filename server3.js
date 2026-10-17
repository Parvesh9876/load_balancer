
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3003;
const SERVER_NAME = process.env.SERVER_NAME || "Server 3";

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Node.js!",
    server: SERVER_NAME,
    port: PORT,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`${SERVER_NAME} running on port ${PORT}`);
});
