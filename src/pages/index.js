const playersData = [
  {
    id: 1,
    player: "John Cena",
    score: 0,
  },
  {
    id: 2,
    player: "John Cena ",
    score: 0,
  },
  {
    id: 3,
    player: "John Cena ",
    score: 0,
  },
];

export default function Home() {
  return (
    <div className="max-w-[530px] h-[533px]  bg-slate-400 rounded-xl  m-auto  ">
      <div className="max-h-[333px] max-w-[466px] m-auto pt-8">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[28px]">Play score</h1>
          <img src="Tsom.png"></img>
        </div>
        <div>
          <p className="font-normal text-[16px] text-[#000000] mt-2 ">
            Hidden in the middle of text
          </p>
        </div>
        {playersData.map((player) => {
          return (
            <div key={player.id} className="flex justify-between mt-8">
              <p>{player.player}</p>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-slate-300 ">
                  -
                </button>
                <p className="mt-2">{player.score}</p>
                <button className="w-10 h-10 rounded-full bg-slate-300 ">
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
