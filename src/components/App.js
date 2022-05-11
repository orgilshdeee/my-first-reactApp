import Player from "./Player.js";
import AddButton from "./AddButton";
import { useState } from "react";

let players = [
  { name: "player1", score: 10 },
  { name: "player2", score: 20 },
  { name: "player3", score: 30 },
  { name: "player4", score: 40 },
];

function App() {
  const [playerz, setPlayers] = useState(players);
  let total = 0;
  players.forEach((e) => (total += e.score));
  let average = total / players.length;
  function addingPlayer(e) {
    setPlayers([...playerz, e]);
    console.log(playerz);
  }
  return (
    <div className="App">
      <h3>players</h3>
      {players.map((e, index) => {
        return <Player playerData={e} key={index} average={average} />;
      })}
      <AddButton playerInfo={addingPlayer} />
    </div>
  );
}

export default App;
