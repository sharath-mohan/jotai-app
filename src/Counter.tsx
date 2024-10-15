import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Simple Counter</h1>
      <button
        className="bg-sky-700 text-white px-3 py-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Counter {count}
      </button>
    </div>
  );
}

export default Counter;
