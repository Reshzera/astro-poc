import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
