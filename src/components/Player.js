import Score from "./Score.js";
import "../player.css";

function Player() {
  return (
    <>
      <div className="playerCard">
        <h3>Player name</h3>
        <p>
          <Score />
        </p>
      </div>
    </>
  );
}

export default Player;
