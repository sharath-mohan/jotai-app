import { useAtomValue } from "jotai";
import React from "react";
import { animeAtom } from "../ReadWriteAtoms";

function Progress() {
  const anime = useAtomValue(animeAtom);
  const watched = anime.filter((a) => a.watched).length;
  return (
    <div>
      <progress value={watched} max={anime.length} className="flex-1">
        {watched}%
      </progress>
      <p className="flex">
        {watched} / {anime.length}
      </p>
    </div>
  );
}

export default Progress;
