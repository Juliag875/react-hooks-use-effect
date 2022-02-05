import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 3000)
  }, []);

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount(()=> count+1)}>Click Me{count}</button>
      <input type="text" value={text} placeholder="Type..."
      onChange={(e)=> setText(e.target.value)} />
    
    <DogPics count={count} />
    </div>
    )
}

export default App;
