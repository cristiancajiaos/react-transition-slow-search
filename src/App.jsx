import { startTransition, useState, useTransition } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchResults from './components/search-results/SearchResults'

function App() {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [isPending, setTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      setQuery(e.target.value);
    })
  }

  return (
    <>
      <section className="container my-2">
        <div className="form-group">
          <input className="form-control" type="text" value={input} onChange={handleChange} placeholder="Type to search"/>
        </div>

        <hr/>

        {isPending && <p>Loading results...</p>}

        <SearchResults query={query}/>
      </section>
    </>
  )
}

export default App
