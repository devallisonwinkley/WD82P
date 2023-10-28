/*
// NODE.JS WAY WITHOUT FRAMEWORK

const http = require("http"); // common js way/version - can be converted into an ES6 module
// import http from "http"; - new way/version

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can only execute JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

const app = http.createServer((request, response) => {
  // how to return an object
  response.writeHead(200, { "Content-Type": "/plain" });
  response.end("Hello, World!");

  // how to return JSON data
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ message: "Hello, NodeJS!" }));

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(notes));
});

const PORT = 3001;

app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
*/

// EXPRESS is a NODE.js framework in the back-end side
// EXPRESS (new, easier, and better way)

/** RESTful API CONVENTION
 
 * ROUTES           HTTP      ACTION                                            STATUS  
 
 * api/notes/:id    GET       fetch a single resource                            200 OK
 * api/notes        GET       fetch all resources                                200 OK
 * api/notes        POST      create a new resource                              201 Created
 * api/notes/:id    DELETE    delete a single resource                           204 No Content
 * api/notes/:id    PUT       replace the specified resource
 * api/notes/:id    PATCH     replaces a part of the specified resource
 */

import express from "express";

const app = express();
const PORT = 3001;

// Express has a built-in middleware/method
app.use(express.json()); // this is how we activate the json parser and needs to be placed on top so it can run first prior to the methods/requests

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can only execute JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    id: 4,
    content: "PUT and DELETE is also important",
    important: false,
  },
];

function generateId() {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;

  return maxId + 1;
}

app.get("/", (request, response) => {
  response.send("<h1>Hello, Express!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.status(200).json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  response.status(200).json(note);
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({ error: "content missing" });
  }

  const note = {
    id: generateId(),
    content: body.content,
    important: body.important || false,
  };

  notes = notes.concat(note);

  response.status(201).json(note);
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Our server is now running on ${PORT}`);
});
