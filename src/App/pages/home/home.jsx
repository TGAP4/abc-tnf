import React, {useState} from 'react';
import * as S from './home.styles';
import {Link} from 'react-router-dom';

import getSchwifty from '../../assets/audio/get_schwifty.mp3';
import volumeIcon from '../../assets/images/volume-icon.png';
import mainImage from '../../assets/images/rick-morty.jpg';

const Home = () => {
  const [muted, setMuted] = useState(true);

  const handleSongToggle = () => {
    const song = document.getElementById('get-schwifty');

    if (muted) {
      song.play()
      setMuted(false);
    } else {
      song.pause();
      setMuted(true);
    }
  }

  return (
    <>
      <audio         
        id='get-schwifty'
      >
        <source 
          type='audio/mp3'
          src={getSchwifty}
          muted='muted'
        />
      </audio>
      <S.Home>
        <S.Button
          as={Link}
          to='/abc-tnf/characters'
        >
          CHARACTERS
        </S.Button>
        <S.MainImage 
          src={mainImage}
          alt='Rick and Morty'
        />
        <S.Button
          as={Link}
          to='/abc-tnf/episodes'
        >
          EPISODES
        </S.Button>
        <S.VolumeIcon 
          src={volumeIcon}
          alt='Volume Icon'
          onClick={handleSongToggle}
          muted={muted}
        />
      </S.Home>
    </>
  );
}

export default Home;