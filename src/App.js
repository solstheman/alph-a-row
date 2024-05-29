import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/alph-a-row", {
      method: "POST",
      body: JSON.stringify({}),
      headers: new Headers({
        "content-type": "application/json",
      }),
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
    });
  }, []);

  return <div>Longest even or odd streak: 0</div>;
}

export default App;
