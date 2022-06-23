import React, { useState, useEffect, useRef } from "react";
import { Note } from "./interface";

const UpdateandDelete: React.FC<{
  note: Note;
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}> = ({ note, notes, setNotes }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editNote, setEditNote] = useState<string>(note.note);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, note: editNote } : note))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <form className="note" onSubmit={(e) => handleEdit(e, note.id)}>
      <div>
        {edit ? (
          <input
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
            className=""
            ref={inputRef}
          />
        ) : (
          <span className="text">{note.note}</span>
        )}
      </div>

      <div className="function-div">
        <span
          className="btns"
          onClick={() => {
            if (!edit) {
              setEdit(!edit);
            }
          }}
        >
          edit
        </span>
        <span className="btns" onClick={() => handleDelete(note.id)}>
          delete
        </span>
      </div>
    </form>
  );
};

export default UpdateandDelete;
