import React, {useState, useEffect} from 'react';
import * as S from './characters.styles';
import axios from 'axios';

import CharacterCard from './characterCard/characterCard';
import CharacterModal from './characterModal/characterModal';


const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [modalCharacter, setModalCharacter] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const characterIds = [];
    for (let i = 1; i < 23; i++) {
      characterIds.push(i);
    }

    (async () => {
      try {
        const responseJson = await axios.get(`https://rickandmortyapi.com/api/character/${characterIds}`);
        setCharacters(responseJson.data);
      } catch {
        setError('Error fetching characters, please try again later.');
      }
    })();
  }, []);

  return (
    <>
      {modalCharacter.id &&
        <CharacterModal 
          character={modalCharacter} 
          setModalCharacter={setModalCharacter}
        />
      }
      {!error ? (
        <S.Container>
          <S.Title>CHARACTERS</S.Title>
          <S.Characters>
            {characters.map((character, i) =>
              <CharacterCard 
                key={`char-${i}`} 
                character={character} 
                setModalCharacter={setModalCharacter}
              />
            )}
          </S.Characters>
        </S.Container>
      ) : (
        <S.ErrorMessage>{error}</S.ErrorMessage>
      )}
    </>
  );
}

export default Characters;
