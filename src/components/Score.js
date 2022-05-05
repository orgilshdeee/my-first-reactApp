import { render } from "react-dom";

function Score(props) {
  function toParent(event) {
    if (event.target.textContent == "+") {
      props.modifyScore(props.playerData.name, "+");
    } else {
      props.modifyScore(props.playerData.name, "-");
    }
  }

  return (
    <>
      <button onClick={toParent}>+</button>
      {props.playerData.score}
      <button onClick={toParent}>-</button>
    </>
  );
}

export default Score;
