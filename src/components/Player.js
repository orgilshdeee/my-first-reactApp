import Score from "./Score.js";
import "../player.css";

function Player(props) {
  function increment(event) {
    console.log(event.target.textContent);
    let testInt = 15;
    testInt++;
    return console.log(testInt);
  }
  return (
    <>
      <div className="playerCard">
        <div>{props.playerData.name}</div>
        <div>
          <button onClick={increment}>+</button>
          <Score score={props.playerData.score} />
          <button onClick={increment}>-</button>
        </div>
      </div>
    </>
  );
}

export default Player;
