import Player from "./Player.js";

const players = [
  { name: "player1", gender: "male", age: 20, score: 10 },
  { name: "player2", gender: "female", age: 21, score: 15 },
  { name: "player3", gender: "female", age: 22, score: 20 },
  { name: "player4", gender: "male", age: 19, score: 25 },
];
function App() {
  return (
    <div className="App">
      <h3>players</h3>
      {players.map((e, index) => {
        return <Player playerData={e} key={index} />;
      })}
    </div>
  );
}

export default App;
