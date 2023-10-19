import { useState } from "react";
import "./App.css";

// Rendering a collection in react
// For react to be able to run your list efficiently and properly, you should add a key attribute to your list

function App(props) {
  const [notes, setNotes] = useState(props.notes);

  return (
    <div>
      <h1>Notes</h1>
      {/* Loop through instead of doing thousands of lines for items */}
      {/* <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul> */}
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
          // Map and forEach has another parameter > index
          // You can use the index as an id, but it is not a good practice - just use the id you have declared for your collection

          // To avoid duplication rendering in react, you should use a key to tell react that this list is a unique item
          // An ID is also a unique identinfier
          // Make it a habit to add a key attribute to your list
          // A key is a required property/attribute by react
          // Attributes that can be ussed in LI > class, list, id. etc
          // forEach won't work, only map
          // Map - creates a new array with the input that you have initially provided/created | make it  habit to use map instead of forEach
        ))}
      </ul>
    </div>
  );
}

export default App;
