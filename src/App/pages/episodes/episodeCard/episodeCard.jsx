import React from 'react';
import * as S from './episodeCard.styles';

const EpisodeCard = (props) => {
  const { 
    episode,
    setModalEpisode,
  } = props;

  const handleMoreInfo = () => {
    window.scrollTo(0,0);
    setModalEpisode(episode)
  }

  return (
    <S.Card>
      <div>
        <S.Label>NAME:</S.Label>
        <div>{episode.name}</div>
        <S.Label>AIR DATE:</S.Label>
        <div>{episode.air_date}</div>
      </div>
      <S.MoreInfo
        onClick={handleMoreInfo}
      >
        More Information
      </S.MoreInfo>
    </S.Card>
  );
}

export default EpisodeCard;