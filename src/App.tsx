import { FormEvent, useRef, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState<string[]>(["aAa","aaa"])
  const inputRef = useRef<HTMLInputElement>(null)
  function onSubmit(e:FormEvent){
    e.preventDefault()
    if(inputRef===null || inputRef.current === null || inputRef.current.value=== "") return
    const val = inputRef.current.value
    setItems(data => {
      return [...data, val]
    })
    inputRef.current.value = ""
  }
  return (
    <div className="App">
      Search: 
      <input type="search"/>
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text"/>
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {items.map(item => (
        <div>{item}</div>
      ))}

    </div>
  );
}

export default App;
