import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 40px 0;
    position: relative;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 200px;
  margin: 20px;
  cursor: pointer;
  background: green;
  margin-top: 20px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  text-decoration: none;

  @media (max-width: 900px) {
    margin: 40px 0;
  }

  &:hover {
    transform: scale(1.08);
  }
`;

export const MainImage = styled.img`
  width: 300px;

  @media (max-width: 900px) {
    position: relative;
  }
`;

export const VolumeIcon = styled.img`
  width: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  opacity: ${({muted}) => muted ? '0.5' : '1'};

  @media (max-width: 900px) {
    top: 0px;
  }
`;