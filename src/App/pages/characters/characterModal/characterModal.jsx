import React, { useState, useEffect } from 'react';
import * as S from './characterModal.styles';

import axios from 'axios';


const CharacterModal = (props) => {
  const {
    character,
    setModalCharacter,
  } = props;
  
  const [episodeNames, setEpisodeNames] = useState([]);

  useEffect(() => {
    let episodes = [];

    character.episode.forEach(async episodeUrl => {
      const responseJson = await axios.get(episodeUrl);
      episodes.push(responseJson.data.name);

      if (episodes.length === character.episode.length) {
        setEpisodeNames(episodes);
      }
    });
  }, [character.episode]);

  return (
    <S.Modal>
      <S.XButton
        onClick={() => setModalCharacter({})}
      >
        X
      </S.XButton>
      <S.Title>{character.name}</S.Title>
      <S.Image src={character.image} alt='Character Image' />
      <S.Info>
        <S.Label>ID</S.Label>
        <div>{character.id}</div>      
        <S.Label>CREATED</S.Label>
        <div>{character.created}</div>
        <S.Label>GENDER</S.Label>
        <div>{character.gender || 'Unknown'}</div>
        <S.Label>LOCATION</S.Label>
        <div>{character.location?.name || 'Unknown'}</div>
        <S.Label>ORIGIN</S.Label>
        <div>{character.origin?.name || 'Unknown'}</div>
        <S.Label>SPECIES</S.Label>
        <div>{character.species || 'Unknown'}</div>
        <S.Label>STATUS</S.Label>
        <div>{character.status || 'Unknown'}</div>
        <S.Label>TYPE</S.Label>
        <div>{character.type || 'Unknown'}</div>
        <S.Label>EPISODES</S.Label>
        {episodeNames.map((episodeName, i) =>
          <div 
            key={`ep-${i}`}
          >
            {episodeName}
          </div>
        )}
      </S.Info>
      <S.Button
        onClick={() => setModalCharacter({})}
      >
        Close
      </S.Button>
    </S.Modal>
  );
}

export default CharacterModal;