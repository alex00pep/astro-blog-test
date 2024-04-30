

import { useState } from 'react';
export default function Button({text}) {

  const [count, setCount] = useState(0);
  return (
      
      <button onClick={() => setCount((count) => count + 1)}>
        {text} count is {count}
      </button>
      
  );
}