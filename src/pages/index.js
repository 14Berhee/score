import { useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Baataraa", score: 0 },
    { id: 2, name: "Munkhzaya", score: 0 },
    { id: 3, name: "Berkhee", score: 0 },
  ]);

  const addScore = (id, points) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, score: player.score + points } : player
      )
    );
  };

  return (
    <div className="max-w-[530px] h-[533px] bg-slate-400 rounded-xl m-auto">
      <div className="max-h-[333px] max-w-[466px] m-auto pt-8">
        <div className="flex justify-between">
          <h1 className="font-bold text-[28px]">Player score</h1>
          <img src="Tsom.png" alt="Icon" />
        </div>
        <div>
          <p className="font-normal text-[16px] text-[#000000] mt-2">
            Hidden in the middle of text
          </p>
        </div>
        {players.map((player) => {
          return (
            <div key={player.id} className="flex justify-between mt-8">
              <p>{player.name}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => addScore(player.id, -1)}
                  className="w-10 h-10 rounded-full bg-slate-300"
                >
                  -
                </button>
                <p className="mt-2">{player.score}</p>
                <button
                  onClick={() => addScore(player.id, 1)}
                  className="w-10 h-10 rounded-full bg-slate-300"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
