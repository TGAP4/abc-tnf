import React from 'react';
import * as S from './characterCard.styles';

const CharacterCard = (props) => {
  const { 
    character,
    setModalCharacter,
  } = props;

  const handleMoreInfo = () => {
    window.scrollTo(0,0);
    setModalCharacter(character)
  }

  return (
    <S.Card>
      <div>
        <S.Label>NAME:</S.Label>
        <div>{character.name}</div>
        <S.Label>ORIGIN:</S.Label>
        <div>{character.origin?.name}</div>
      </div>
      <S.MoreInfo
        onClick={handleMoreInfo}
      >
        More Information
      </S.MoreInfo>
    </S.Card>
  );
}

export default CharacterCard;