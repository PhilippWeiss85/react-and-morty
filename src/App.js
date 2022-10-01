import { Card } from './Components/Card/Card';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { DetailCharacterPage } from './DetailCharacterPage';
import { useNavigate } from 'react-router-dom';

function App() {
  const [cards, setCards] = useState([]);
  const [detailedCards, setDetailedCards] = useState([]);
  const [toggleButton, setToggleButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUrl() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        const cardData = data.results;
        setCards(cardData);
        setDetailedCards(cardData);
      } catch (error) {
        window.log(error);
      }
    }

    fetchUrl();
  }, []);

  function toggleFunction(cardId) {
    const showMore = cards.filter((card) => cardId === card.id);
    setToggleButton((previousToggle) => previousToggle === !previousToggle);
    setDetailedCards(showMore);
    navigate(`/details/${cardId}`);
  }

  function toggleCardInformation(cardId) {
    const toggleInfo = cards.filter((card) => card.id === cardId);
    setCards(toggleInfo);
  }

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
                    toggleFunction={toggleFunction}
                    toggleButton={toggleButton}
                    detailedCard={detailedCards}
                  />
                );
              })}
            </StyledSection>
          }
        />
        <Route
          path="details/:Id"
          end
          element={
            <StyledSection>
              {detailedCards.map((card) => {
                return (
                  <DetailCharacterPage
                    id={card.id}
                    key={card.id}
                    image={card.image}
                    name={card.name}
                    status={card.status}
                    species={card.species}
                    type={card.type}
                    toggleCardInformation={toggleCardInformation}
                  />
                );
              })}
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
