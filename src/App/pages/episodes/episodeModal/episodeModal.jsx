import React, { useState, useEffect } from 'react';
import * as S from './episodeModal.styles';

import axios from 'axios';


const EpisodeModal = (props) => {
  const {
    episode,
    setModalEpisode,
  } = props;
  
  const [characterNames, setCharacterNames] = useState([]);

  useEffect(() => {
    let characters = [];

    episode.characters.forEach(async characterUrl => {
      const responseJson = await axios.get(characterUrl);
      characters.push(responseJson.data.name);

      if (characters.length === episode.characters.length) {
        setCharacterNames(characters);
      }
    });
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
        {characterNames.map((characterName, i) =>
          <div 
            key={`ep-${i}`}
          >
            {characterName}
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