import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function useFriendStatus() {
//   const [count, setCount] = useState(5);
  const [isOnline,setIsOnline] = useState(null);
  useEffect(() => {
    // document.title = `Yot clicked ${count} time`;
    if(isOnline === null){
        return "Loading..."
    }
    return isOnline ? "Online" : "Offline";
  });
  return (
    <>
      <div>
        <p>You click {isOnline} times</p>
        <button onClick={() => setIsOnline(1)}>click me!</button>
      </div>
    </>
  );
}

export default useFriendStatus;
