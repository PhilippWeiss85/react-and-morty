import { Card } from './Components/Card/Card';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, useParams } from 'react-router-dom';
import { CharacterPage } from './CharacterPage';

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

  return (
    <div>
      <header>
        <Header />
        <Navbar />
      </header>
      <Routes>
        <Route
          path="home"
          element={
            <StyledSection>
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
            </StyledSection>
          }
        />
        <Route
          path="characters"
          element={
            <StyledSection>
              <CharacterPage />
            </StyledSection>
          }
        />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
