import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const Timer = setTimeout(() => {
        setCount((count) => count +1)
    },1000);
    return () => clearTimeout(Timer);
  },[])
  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
}
export default Example;