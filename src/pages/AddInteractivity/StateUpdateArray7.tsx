import { useState } from "react";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          // 创建包含变更的*新*对象
          return { ...artwork, seen: nextSeen };
        } else {
          // 没有变更
          return artwork;
        }
      })
    );
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          // 创建包含变更的*新*对象
          return { ...artwork, seen: nextSeen };
        } else {
          // 没有变更
          return artwork;
        }
      })
    );
  }

  return (
    <>
      <h1>艺术愿望清单</h1>
      <h2>我想看的艺术清单：</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>你想看的艺术清单：</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({
  artworks,
  onToggle,
}: {
  artworks: { id: number; seen: boolean; title: string }[];
  onToggle(artworkId: number, nextSeen: boolean): void;
}) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
