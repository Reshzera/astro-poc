import { counter } from "../stores/counterStore";
import { useStore } from "@nanostores/react";

export default function Counter() {
  const counterValue = useStore(counter);
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      React Counter Component
      <button onClick={() => counter.set(counterValue + 1)}>
        Clicked {counterValue} times
      </button>
    </div>
  );
}
