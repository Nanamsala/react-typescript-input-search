import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState<string[]>(["aAa","aaa"])
  const [filtereditems, setFilteredItems] = useState<string[]>(items)
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

  function onChange (e:ChangeEvent<HTMLInputElement>){
    const text = e.target.value
    setFilteredItems(items.filter(item => item.toLowerCase().includes(text.toLowerCase())))

  }
  return (
    <div className="App">
      Search: 
      <input onChange={onChange} type="search"/>
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text"/>
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filtereditems.map(item => (
        <div>{item}</div>
      ))}

    </div>
  );
}

export default App;
