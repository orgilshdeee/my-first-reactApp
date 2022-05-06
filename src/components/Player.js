import { useState } from "react";
import Score from "./Score.js";
import "../player.css";

function Player(props) {
  const [score, setScore] = useState(props.playerData.score);

  return (
    <>
      <div className={props.average < score ? "playerCardBG" : "playerCard"}>
        <div>{props.playerData.name}</div>
        <div>
          <Score score={score} setScore={setScore} />
        </div>
      </div>
    </>
  );
}

export default Player;
