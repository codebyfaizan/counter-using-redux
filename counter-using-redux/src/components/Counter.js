import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type: "toggle"});
  };

  const incrementCounter = () => {
    dispatch({ type: "increment" });
  };

  const increaseCounter= () =>{
    dispatch({type: "increase", amount: 5})
  }

  const decrementCounter = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={increaseCounter}>Increase by 5</button>
      <button onClick={decrementCounter}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </main>
  );
};

export default Counter;
