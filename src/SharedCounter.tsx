import { useAtom } from "jotai";
import React from "react";
import { counterAtom } from "./counter";

function SharedCounter() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <div className="p-10 px-0">
      <button
        className="bg-sky-700 text-white px-3 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Counter {count}
      </button>
    </div>
  );
}

export default SharedCounter;
