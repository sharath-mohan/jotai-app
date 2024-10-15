import { useAtom } from "jotai";
import { animeAtom } from "../ReadWriteAtoms";
function AnimeList() {
  const [anime, setAnime] = useAtom(animeAtom);
  return (
    <div>
      <ul>
        {anime.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.watched}
              onChange={(e) =>
                setAnime((anime) =>
                  anime.map((a) =>
                    a.id === item.id ? { ...a, watched: e.target.checked } : a
                  )
                )
              }
            />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
