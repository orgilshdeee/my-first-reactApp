import Player from "./Player.js";
import AddButton from "./AddButton";
import { useState } from "react";
import { Link } from "react-router-dom";

const initial = [
  { name: "player1", score: 10 },
  { name: "player2", score: 20 },
  { name: "player3", score: 30 },
  { name: "player4", score: 40 },
];

function Main() {
  const [players, setPlayers] = useState(initial);
  // let total = 0;
  // players.forEach((e) => (total += e.score));
  // let average = total / players.length;
  function addingPlayer(e) {
    setPlayers([...players, e]);
  }
  return (
    <>
      <div className="App">
        <h3>players</h3>
        {players.map((e, index) => {
          return <Player playerData={e} key={index} />;
        })}
        <AddButton playerInfo={addingPlayer} />
      </div>
    </>
  );
}

export default Main;
