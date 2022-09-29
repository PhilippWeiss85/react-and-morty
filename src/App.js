import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>React and Morty</h1>
      </header>
      <main>
        <section>
          <img
            alt="Character"
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg
"
          ></img>
          <h2>Morty Smith</h2>
          <button>Show more</button>
        </section>
        <footer>
          <nav>
            <a href="#">Nav 1</a>
            <a href="#">Nav 2</a>
            <a href="#">Nav 3</a>
            <a href="#">Nav 4</a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

export default App;
