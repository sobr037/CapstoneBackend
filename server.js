const express = require("express");
const cors = require('cors');
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");

// Allow requests from localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

// parse requests of content-type - application/json
    app.use(express.json());
    app.get("/", (req, res) => {
    res.json({ message: "Welcome to the SQL Backend application for Fairer Coffee." });
    });



// My Routes :) 
    const userRoutes = require('./routes/userRoutes');
    const greenCoffeeRoutes = require('./routes/greenCoffeeRoutes'); 
    const coffeeProfileRoutes = require('./routes/coffeeProfileRoutes');
    const orderRoutes = require('./routes/orderRoutes');
    const swaggerUi = require('swagger-ui-express');
    swaggerDocument = require('./swagger.json');

// Define the routes
    app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocument)
        );
    app.use('/users', userRoutes); // User routes
    app.use('/inventory/green', greenCoffeeRoutes); // Green Coffee Inventory routes
    app.use('/inventory/profiles', coffeeProfileRoutes); // Use Coffee Profile routes
    app.use('/orders', orderRoutes); // Use Order routes



// Set port, listen for requests
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    });
