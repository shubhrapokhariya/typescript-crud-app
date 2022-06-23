import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import { Note } from "./components/interface";
import "./App.css";

const App: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const addNotes = (e: React.FormEvent) => {
    e.preventDefault();

    if (note) {
      setNotes([...notes, { id: Date.now(), note }]);
      setNote("");
    }
  };

  return (
    <div className="App">
      <Create note={note} setNote={setNote} addNotes={addNotes} />
      <Read notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
