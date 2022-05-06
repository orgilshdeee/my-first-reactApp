import Player from "./Player.js";

let players = [
  { name: "player1", gender: "male", age: 20, score: 10 },
  { name: "player2", gender: "female", age: 21, score: 20 },
  { name: "player3", gender: "female", age: 22, score: 30 },
  { name: "player4", gender: "male", age: 19, score: 40 },
];
function App() {
  let total = 0;
  players.forEach((e) => (total += e.score));
  let average = total / players.length;
  function showAll() {
    return console.log(players);
  }
  return (
    <div className="App">
      <h3>players</h3>
      {players.map((e, index) => {
        return <Player playerData={e} key={index} average={average} />;
      })}
      <button onClick={showAll}>show players in console</button>
    </div>
  );
}

export default App;
