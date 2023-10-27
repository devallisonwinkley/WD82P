// // NODE.JS WAY WITHOUT FRAMEWORK

// const http = require("http"); // common js way/version - can be converted into an ES6 module
// // import http from "http"; - new way/version

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can only execute JavaScript",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];

// const app = http.createServer((request, response) => {
//   // how to return an object
//   // response.writeHead(200, { "Content-Type": "/plain" });
//   // response.end("Hello, World!");

//   // how to return JSON data
//   // response.writeHead(200, { "Content-Type": "application/json" });
//   // response.end(JSON.stringify({ message: "Hello, NodeJS!" }));

//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });

// const PORT = 3001;

// app.listen(PORT);
// console.log(`Server is running on port ${PORT}`);

// EXPRESS is a NODE.js framework in the back-end side
// EXPRESS (new, easier, and better way)
import express from "express";

const app = express();
const PORT = 3001;

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

/** RESTful API CONVENTION
 * ROUTES           HTTP      ACTION
 * api/notes/:id    GET       fetch a single resource
 * api/notes        GET       fetch all resources
 * api/notes        POST      create a new resource
 * api/notes/:id    DELETE    delete a single resource
 * api/notes/:id    PUT       replace the specified resource
 * api/notes/:id    PATCH     replaces a part of the specified resource
 */

app.get("/", (request, response) => {
  response.send("<h1>Hello, Express!</h1>");
});

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  response.status(200).json(note);
});

app.get("/api/notes", (request, response) => {
  response.status(200).json(notes);
});

app.post("/api/notes", (request, response) => {
  response.send();
});

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);

  response.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Our server is now running on ${PORT}`);
});
