import { useSetAtom } from "jotai";
import React, { useRef, useState } from "react";
import { animeAtom } from "../ReadWriteAtoms";

function AddAnime() {
  const [val, setVal] = useState("");
  const addAnime = useSetAtom(animeAtom);
  const addAnimeHandler = () => {
    addAnime((anime) => [
      ...anime,
      {
        name: val,
        id: Math.random().toString(),
        watched: false,
      },
    ]);
    setVal("");
  };
  return (
    <div className="flex gap-1">
      <input
        className="p-2 border-2 border-slate-400 flex-1"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        className="bg-slate-800 text-white p-2 rounded"
        onClick={addAnimeHandler}
      >
        Add
      </button>
    </div>
  );
}

export default AddAnime;
