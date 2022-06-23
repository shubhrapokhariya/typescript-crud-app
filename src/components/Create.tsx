import React, { useRef } from "react";
import "../App.css";

interface props {
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  addNotes: (e: React.FormEvent) => void;
}

const Create: React.FC<props> = ({ note, setNote, addNotes }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="form-div">
      Write Your Notes here{" "}
      <form
        className="input"
        onSubmit={(e) => {
          addNotes(e);
          inputRef.current?.blur();
        }}
      >
        <input
          type="text"
          placeholder="Note"
          value={note}
          ref={inputRef}
          onChange={(e) => setNote(e.target.value)}
          className=""
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
