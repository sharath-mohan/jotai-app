import { atom, useAtom } from "jotai";
import { counterAtom } from "./counter";

const doubleCountAtom = atom((get) => get(counterAtom) * 2);
function DoubledCounter() {
  const [doubleCount] = useAtom(doubleCountAtom);
  return <div>DoubledCounter {doubleCount}</div>;
}

export default DoubledCounter;
