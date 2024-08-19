const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const { appendData } = require("./fileHandling");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle form submission
app.post("/submit-form", (req, res) => {
    const { email, userName, longitude, latitude } = req.body;

    // Log the incoming form data
    console.log("Received data:", { email, userName, longitude, latitude });

    const formData = {
        Email: email,
        Username: userName,
        Longitude: longitude,
        Latitude: latitude
    };

    const jsonFilePath = path.join(__dirname, "data.json");
    appendData(jsonFilePath, formData);

    // Respond with a success message
    res.json({ message: `Data received. Email: ${email}, Username: ${userName}, Longitude: ${longitude}, Latitude: ${latitude}` });
});

// Serve a confirmation page after form submission (optional)
app.get('/confirmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'confirmation.html'));
});

// Handle the home route if needed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
