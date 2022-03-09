import "./styles.css";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  return (
    <div>
      <h1> Counter </h1>
      <h1> {counter} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
