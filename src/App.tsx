import { useEffect, useState } from "react";

import "./App.css";

export const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState("Sum");

  const handleCalculator = () => {
    switch (operation) {
      case "Sum":
        setResult(num1 + num2);
        break;
      case "Subtract":
        setResult(num1 - num2);
        break;
      case "Multiply":
        setResult(num1 * num2);
        break;
      case "Divide":
        setResult(num1 / num2);
        break;
    }
  };

  useEffect(() => {
    handleCalculator();
  }, [num1, num2, operation]);

  return (
    <>
      <div>
        <h1>Calculator</h1>
        <label style={{ display: "flex", flexDirection: "column" }}>
          First Number
        </label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        ></input>
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          Second Number
        </label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        ></input>
      </div>
      <div style={{ marginTop: "10px" }}>
        <select onChange={(e) => setOperation(e.target.value)}>
          <option>Sum</option>
          <option>Subtract</option>
          <option>Multiply</option>
          <option>Divide</option>
        </select>
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>Result {result}</label>
      </div>
    </>
  );
};
