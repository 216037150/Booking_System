const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const dbName = process.env.DB_NAME || "customer";
const collectionName = "Bookings";

const client = new MongoClient(uri);

async function startServer() {
    try {
        await client.connect();
        console.log("Successfully connected to MongoDB");

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        // Serve static files from the 'client' directory
        app.use(express.static(path.join(__dirname, "../client")));

        // Form submission
        app.post("/form", async (req, res) => {
            const formData = req.body;

            try {
                const result = await collection.insertOne(formData);
                console.log("Data inserted to database", result.insertedId);
                return res.status(201).json({ message: "Form data saved successfully!", id: result.insertedId });
            } catch (err) {
                console.error("Failed to insert data", err);
                return res.status(500).json({ message: "Error saving form data", error: err });
            }
        });

        // Endpoint to get all form data
        app.get("/formData", async (req, res) => {
            try {
                const formData = await collection.find({}).toArray();
                return res.status(200).json(formData);
            } catch (err) {
                console.error("Error fetching form data", err);
                return res.status(500).json({ message: "Error fetching form data", error: err });
            }
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
}

startServer();
