import React from "react";
import Progress from "./anime/Progress";
import AddAnime from "./anime/AddAnime";
import AnimeList from "./anime/AnimeList";
import { atom } from "jotai";
export type anime = {
  name: string;
  id: string;
  watched: boolean;
};
export const animeAtom = atom<anime[]>([]);
function ReadWriteAtoms() {
  return (
    <div>
      <Progress />
      <AddAnime />
      <AnimeList />
    </div>
  );
}

export default ReadWriteAtoms;
