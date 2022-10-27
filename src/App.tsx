import { FormEvent, useRef, useState } from 'react';
import './App.css';

function App() {
  const [allItems, setItems] = useState<string[]>(["Banana","Apple"])
  const [query, setQuery] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)
  
  const filteredItems:string[] = allItems.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  )

  function onSubmit(e:FormEvent){
    e.preventDefault()
    if(!inputRef.current || inputRef.current.value=== "") return
    const val = inputRef.current.value
    setItems( [...allItems, val]
    )
    inputRef.current.value = ""
  }


  return (
    <div className="App">
      Search: 
      <input value={query} onChange={e => setQuery(e.target.value)} type="search"/>
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text"/>
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map(item => (
        <div>{item}</div>
      ))}

    </div>
  );
}

export default App;
