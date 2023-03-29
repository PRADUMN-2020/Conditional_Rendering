import React from "react";
import Login from "./Login";
var LoggedIn = false;

const currentTime = new Date(2023, 3, 30, 9).getHours();

// console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        // LoggedIn ? <h1>Hello</h1> : <Login />
        currentTime > 12 && <h1>Why are you still working</h1>
      }
    </div>
  );
}

export default App;
