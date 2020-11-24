import React, { useState, useEffect } from 'react';
import * as S from './episodeModal.styles';

import axios from 'axios';


const EpisodeModal = (props) => {
  const {
    episode,
    setModalEpisode,
  } = props;
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      let characterIds = [];
      episode.characters.forEach(characterUrl => {
        const characterId = characterUrl.split('character/')[1];
        characterIds.push(characterId);
      });

      const responseJson = await axios.get(`https://rickandmortyapi.com/api/character/${characterIds}`);
      const characterNames = responseJson.data.map(char => char.name);

      setCharacters(characterNames);
    })();
  }, [episode.characters]);

  return (
    <S.Modal>
      <S.XButton
        onClick={() => setModalEpisode({})}
      >
        X
      </S.XButton>
      <S.Title>{episode.name}</S.Title>
      <S.Info>
        <S.Label>ID</S.Label>
        <div>{episode.id}</div>
        <S.Label>EPISODE</S.Label>
        <div>{episode.episode || 'Unknown'}</div>      
        <S.Label>CREATED</S.Label>
        <div>{episode.created}</div>
        <S.Label>AIR DATE</S.Label>
        <div>{episode.air_date || 'Unknown'}</div>
        <S.Label>CHARACTERS</S.Label>
        {characters.map((character, i) =>
          <div 
            key={`ep-${i}`}
          >
            {character}
          </div>
        )}
      </S.Info>
      <S.Button
        onClick={() => setModalEpisode({})}
      >
        Close
      </S.Button>
    </S.Modal>
  );
}

export default EpisodeModal;