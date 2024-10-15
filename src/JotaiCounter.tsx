import { atom, useAtom } from "jotai";
import SharedCounter from "./SharedCounter";
import DoubledCounter from "./DoubledCounter";
import { counterAtom } from "./counter";

function JotaiCounter() {
  const [count, setCount] = useAtom(counterAtom);
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Jotai Counter</h1>
      <button
        className="bg-sky-700 text-white px-3 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Counter {count}
      </button>
      <SharedCounter />
      <DoubledCounter />
    </div>
  );
}

export default JotaiCounter;
