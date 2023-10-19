import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Anecdote from "./Temp.jsx";
import Activity from "./Activity.jsx";

const notes = [
  {
    id: 1,
    content: "HTML is easy.",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript.",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP Protocol.",
    important: true,
  },
  {
    id: 4,
    content: "Back-end programming is harder than front-end.",
    important: true,
  },
];

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass date",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Anecdote />
    <App notes={notes} />
    <Activity courses={courses} />
  </React.StrictMode>
);
