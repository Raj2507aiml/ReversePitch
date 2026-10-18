// const http = require("http");
// const server = http.createServer((req , res) =>{
//     res.end("Welcome to ReversePitch!");
// });
// server.listen(3000, ()=>{
//     console.log("server is running");
// });



const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to ReversePitch API!");
});

// Project status route
app.get("/api/status", (req, res) => {
    res.json({
        project: "ReversePitch",
        status: "Backend is running",
        message: "Recruiters discover developers through their projects"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
