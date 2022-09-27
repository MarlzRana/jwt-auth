// Import modules
const express = require("express");

// Set up the necessary modules
const app = express();

// Some boilerplate posts
const posts = [
  {
    username: "marlzrana",
    title: "learning jwt auth",
  },
  {
    username: "mrrana",
    title:
      "jwt auth and it's power over session based auth when using dealing with a microservice architecture",
  },
];

// API routes and logic
app.route("/posts").get((req, res) => res.json(posts));

// Tell the server to listen to requests on port 3000
app.listen(3000);
