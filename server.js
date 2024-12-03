const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

// Handle any requests by sending the React app's index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3001`);
});
