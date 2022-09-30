import { Card } from './Components/Card/Card';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchUrl() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        console.log('fetch data', data);
        const cardData = data.results;
        setCards(cardData);
      } catch (error) {
        window.log(error);
      }
    }

    fetchUrl();
  }, []);

  console.log(cards);

  return (
    <div>
      <Header />
      <StyledMain>
        {cards.map((card) => {
          return (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              name={card.name}
              gender={card.gender}
              status={card.status}
              species={card.species}
            />
          );
        })}
      </StyledMain>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;

const StyledMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
