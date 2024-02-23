import { useState } from "react";

const CountNumber = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  console.log(" re-render");

  return (
    <div>
      <p>Number: {count} </p>

      <div
        className=""
        style={{ display: "flex", gap: "10px", justifyContent: "center" }}
      >
        <button
          style={{
            padding: "5px 10px",
            border: "none",
            outline: "none",
            backgroundColor: "green",
          }}
          onClick={handleIncrementClick}
        >
          Tăng
        </button>
        <button
          style={{
            padding: "5px 10px",
            border: "none",
            outline: "none",
            backgroundColor: "green",
          }}
          onClick={handleDecrementClick}
        >
          Giảm
        </button>
      </div>
    </div>
  );
};

export default CountNumber;
