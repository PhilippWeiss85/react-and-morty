import { Card } from './Components/Card/Card';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

export function CharacterPage() {
  useEffect(() => {
    async function fetchUrl() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        console.log('fetch data', data);
        const cardData = data.results;
      } catch (error) {
        window.log(error);
      }
    }

    fetchUrl();
  }, []);

  return <h1>test</h1>;
}

// Stylings below
