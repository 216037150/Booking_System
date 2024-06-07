# Booking System

# Overview

This web application is built using Node.js with Express, MongoDB, and serves a frontend with HTML, CSS, and JavaScript. The application allows users to submit a form and stores the submitted data in a MongoDB database. It also provides an endpoint to retrieve all submitted form data.
Requirements

To run this application, you need to have the following installed:

    Node.js (v12 or later)
    npm (Node Package Manager)
    MongoDB

# Backend (Node.js with Express) ; Serve-side

The backend is implemented in server.js and provides the following functionalities:

    Connects to a MongoDB database.
    Serves static files from the client directory.
    Handles form submission and stores data in the MongoDB database.
    Provides an endpoint to retrieve all form data.    

  # Running the Application
  1. Start the MongoDB server
  2. Run the Node.js server:  nodemon server.js
  3. Open a web browser and go to: http://localhost:8000

 You should see a form that you can fill out and submit. The submitted data will be stored in the MongoDB database, and you can retrieve all form data by accessing the /formData endpoint.
 
 # Environment Variables

    > PORT: The port on which the server will run. Default is 8000.
    > MONGODB_URI: The URI for the MongoDB database. Default is mongodb://localhost:27017/.
    > DB_NAME: The name of the database. Default is customer.

# Frontend (HTML, CSS, JavaScript): client-side
  The frontend is located in the client directory and consists of an HTML form styled with CSS and interactivity added with JavaScript.
