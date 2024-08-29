const datas = [
  {
    id: 1,
    player: "John Cena ",
    score: 12,
  },
  {
    id: 2,
    player: "John Cena ",
    score: 12,
  },
  {
    id: 3,
    player: "John Cena ",
    score: 12,
  },
];

export default function John(props) {
  return (
    <div className="flex max-w-[466px] items-center h-20 mt-6 justify-between  ">
      <div></div>

      <div>
        <div>
          <p>name</p>
          <div className="mt-7 max-w-[466px] flex  ">
            <button className="mr-6 w-10 h-10 rounded-full bg-slate-300  ">
              -
            </button>
            {score}
            <button className=" w-10 h-10 rounded-full bg-slate-300 ">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
