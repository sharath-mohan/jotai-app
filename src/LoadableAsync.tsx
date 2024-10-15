import { atom, useAtom } from "jotai";
import { Suspense } from "react";

// Async atom fetching data from an API
const userIdAtom = atom(1);
const userAtom = atom(async (get, { signal }) => {
  const userId = get(userIdAtom);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}?_delay=2000`,
    { signal }
  );
  return response.json();
});
const Controls = () => {
  const [userId, setUserId] = useAtom(userIdAtom);
  return (
    <div className="p-10 flex flex-row gap-2 items-center">
      User Id: {userId}
      <button
        disabled={userId === 1}
        onClick={() => setUserId((c) => c - 1)}
        className="bg-slate-800 text-white rounded px-3 py-2 disabled:opacity-50"
      >
        Prev
      </button>
      <button
        onClick={() => setUserId((c) => c + 1)}
        className="bg-slate-800 text-white rounded px-3 py-2"
      >
        Next
      </button>
    </div>
  );
};
const UserName = () => {
  const [user] = useAtom(userAtom);
  return <div>User name: {user.name}</div>;
};

export function LoadableAsync() {
  return (
    <>
      <Controls />
      <Suspense fallback="Loading...">
        <UserName />
      </Suspense>
    </>
  );
}
