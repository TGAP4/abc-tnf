import React, {useState, useEffect} from 'react';
import * as S from './episodes.styles';
import axios from 'axios';

import EpisodeCard from './episodeCard/episodeCard';
import EpisodeModal from './episodeModal/episodeModal';


const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [modalEpisode, setModalEpisode] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    const episodeIds = [];
    for (let i = 1; i < 19; i++) {
      episodeIds.push(i);
    }

    (async () => {
      try {
        const responseJson = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeIds}`);
        setEpisodes(responseJson.data);
      } catch {
        setError('Error fetching episodes, please try again later.');
      }
    })();
  }, []);

  return (
    <>
      {modalEpisode.id &&
        <EpisodeModal 
          episode={modalEpisode} 
          setModalEpisode={setModalEpisode}
        />
      }
      {!error ? (
        <S.Container>
          <S.Title>EPISODES</S.Title>
          <S.Episodes>
            {episodes.map((episode, i) =>
              <EpisodeCard 
                key={`ep-${i}`} 
                episode={episode} 
                setModalEpisode={setModalEpisode}
              />
            )}
          </S.Episodes>
        </S.Container>
      ) : (
        <S.ErrorMessage>{error}</S.ErrorMessage>
      )}
    </>
  );
}

export default Episodes;
