import React, { useState } from "react";

type Props = {
  addPlayer: (name: string) => void;
};

export default function AddPlayerForm(props: Props) {
  const [name, setName] = useState("");

  const addPlayer = () => {
    props.addPlayer(name);
    setName("");
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />{" "}
        <button onClick={addPlayer}>Add</button>
      </p>
    </div>
  );
}
