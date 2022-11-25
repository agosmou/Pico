// This is a basic express server configuration


require("dotenv").config(); //  import dotenv before anything else
const express = require("express");  // import express app
const cors = require('cors')
const db = require('./db') // one dot is current directory and this will automattically search for an index.js file in the db folder - (./db/index.js) is acceptable
const morgan = require("morgan");  // import morgan app
const app = express();  // create instance of express app and store in a variable called app

//middleware - note that placement is very important for middleware
app.use(cors()) //this middleware bypasses CORS error
app.use(express.json());


/*to define a route in express, 1st reference express instance in app variable and specify HTTP
*/

//-------------------------------------------------------------------------------

/*
"<URL>" is the first parameter. 2nd input argument is callback function that gets two paramters - request and response stored in req and res variables.
*/


// this is the URL - it is setting up a route in Express
// server is running on local host until it is deployed to specific IP with domain name
// front end would go on http://localhost:3001/api/v1/restaurants

// API

// Get all restaurants - C(R)UD
app.get("/api/v1/restaurants", async (req, res) =>{
    try{ // for async-await, use a try-catch
        const results = await db.query("select * from restaurants");
        //console.log(results);
        res.status(200).json({
            results: results.rows.length,
            status: "success",
            data: {
                restaurants: results.rows,
            },
        });  // response are in json and pass in json object

    } catch (err){
        console.log(err)

    }

});

// Get a Restaurant - C(R)UD
app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id);

    try{
        const results = await db.query(
            "select * from restaurants where id = $1", [req.params.id] // paramterized query. Never use string interpolation - it's susceptible to SQL injection attacks
        );
        // select * from restaurants where id = req.params.id    

        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0], // rows always returns array so we just need the first item in the array, the id
            },
        });

    } catch(err){
        console.log(err);
    }
});

// Create a Restaurant - (C)RUD
app.post("/api/v1/restaurants", async (req, res) => {
    console.log(req.body);

    try{
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range]
        );
        console.log(results);

        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0], // only the first in the array because only the one restaurant is needed
            },
        });

    } catch(err){
        console.log(err);
    }   
});

// Update a Restaurant - CR(U)D
app.put("/api/v1/restaurants/:id", async (req, res) => {

    try{
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *", [req.body.name, req.body.location,req.body.price_range,req.params.id],
        );

        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            },
        });

    } catch(err){
        console.log(err);
    }

    console.log(req.params.id);
    console.log(req.body); 
});
// you have to update all the fields when using a put method

// Delete a Restaurant - CRU(D)
app.delete("/api/v1/restaurants/:id", async (req, res) => {

    try{
        const results = await db.query("DELETE from restaurants where id = $1", [req.params.id,]
        );
        res.status(204).json({
            status: "success",
        });

    } catch(err) {
        console.log(err);
    };
});

// -----------------------------------------------------------------------------

const port = process.env.PORT || 3001; // setting constant to environment variable defined in .env file. If the environment variable isnt passed, the default value for port will be 3001 
app.listen(port, () => {
    console.log(`server is up and listening on ${port}`);
});  // tell express app to listen on a specific port, eg 3005. You must also pass in a call back funtion




// $ node server.js