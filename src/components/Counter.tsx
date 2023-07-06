import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function change(e: any) {
    setCount(Number(e.target.value));
  }

  return (
    <div className="flex gap-4 items-center p-10">
      <button
        onClick={() => {
          setCount((p) => p + 1);
        }}
        className="p-2 rounded-md border border-green-600 hover:bg-green-500/30 active:bg-green-500/50 
        active:scale-90 transition-all
        "
      >
        +
      </button>
      <div>
        <input type="number" value={count} onChange={change} />
      </div>
      <button
        onClick={() => {
          if (count > 0) setCount((p) => p - 1);
        }}
        className="p-2 rounded-md border border-green-600 hover:bg-green-500/30 active:bg-green-500/50
        active:scale-90 transition-all
        "
      >
        -
      </button>
    </div>
  );
}
