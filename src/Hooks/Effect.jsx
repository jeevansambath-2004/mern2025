import React, { useEffect, useState } from 'react';

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 2000);
    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    console.log("UseEffect Rendered");
  }, [count]);

  return (
    <div>
      <h2>Increment / Decrement</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
};

export default Effect;