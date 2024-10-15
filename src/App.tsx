import Counter from "./Counter";
import JotaiCounter from "./JotaiCounter";
import { LoadableAsync } from "./LoadableAsync";
import ReadWriteAtoms from "./ReadWriteAtoms";

function App() {
  return (
    <div className="px-3">
      <Counter />
      <JotaiCounter />
      <ReadWriteAtoms />
      <LoadableAsync />
    </div>
  );
}

export default App;
