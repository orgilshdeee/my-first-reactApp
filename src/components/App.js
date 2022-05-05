import Player from "./Player.js";

let players = [
  { name: "player1", gender: "male", age: 20, score: 10 },
  { name: "player2", gender: "female", age: 21, score: 15 },
  { name: "player3", gender: "female", age: 22, score: 20 },
  { name: "player4", gender: "male", age: 19, score: 25 },
];
function App() {
  function showAll() {
    return console.log(players);
  }
  function modifyScore(name, plusMinus) {
    if (plusMinus == "+") {
      players[findPlayerIndex(name)].score++;
    } else {
      players[findPlayerIndex(name)].score--;
    }
  }
  function findPlayerIndex(playerName) {
    let foundIndex = 0;
    players.map((player, index) => {
      if (player.name == playerName) {
        foundIndex = index;
      }
    });
    return foundIndex;
  }
  return (
    <div className="App">
      <h3>players</h3>
      {players.map((e, index) => {
        return <Player playerData={e} key={index} modifyScore={modifyScore} />;
      })}
      <button onClick={showAll}>show players in console</button>
    </div>
  );
}

export default App;
