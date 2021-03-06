import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10vw 80px;
  color: white;
  font-weight: 700;
  margin-top: 40px;
`;

export const Title = styled.div`
  font-size: 36px;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Episodes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  grid-gap: 30px;
  margin-top: 25px;
`;

export const ErrorMessage = styled.div`
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  margin: 80px auto;
  width: 80%;
`;