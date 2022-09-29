import { Card } from './Components/Card/Card';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Card />

        <footer>
          <Navbar />
        </footer>
      </main>
    </div>
  );
}

export default App;
