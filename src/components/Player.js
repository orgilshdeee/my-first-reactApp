import Score from "./Score.js";
import "../player.css";

function Player(props) {
  function increment(event) {
    return console.log(event);
  }
  return (
    <>
      <div className="playerCard">
        <div>{props.playerData.name}</div>
        <div>
          <Score
            playerData={props.playerData}
            send={increment}
            modifyScore={props.modifyScore}
          />
        </div>
      </div>
    </>
  );
}

export default Player;
