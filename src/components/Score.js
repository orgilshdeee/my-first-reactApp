function Score(props) {
  function decrement() {
    props.setScore(props.score - 1);
  }
  function increment() {
    props.setScore(props.score + 1);
  }
  return (
    <>
      <button onClick={increment}>+</button>
      {props.score}
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Score;
