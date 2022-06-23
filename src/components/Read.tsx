import React from "react";
import { Note } from "./interface";
import UpdateAndDelete from "./UpdateAndDelete";

interface props {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const Read: React.FC<props> = ({ notes, setNotes }) => {
  return (
    <div className="notes">
      {notes?.map((note) => (
        <UpdateAndDelete
          notes={notes}
          note={note}
          key={note.id}
          setNotes={setNotes}
        />
      ))}
    </div>
  );
};

export default Read;
