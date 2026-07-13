import './SearchResults.css'
export default function SearchResults({ query }) {
  const items = [];

  if (query) {
    for (let i = 0; i < 1000; i++) {
      items.push(<li key={i}>Results for {query} - {i}</li>)
    }
  }
  return (
    <section className="searchResults">
      <ul>
        {items}
      </ul>
    </section>
  );
}