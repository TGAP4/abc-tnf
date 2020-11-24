import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 35px;
  background: #eeeeee;
  border-radius: 5px;
  color: black;
  font-weight: 500;
  box-sizing: border-box;
`;

export const Label = styled.div`
  font-weight: 800;
  margin: 15px 0 3px;
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  cursor: pointer;
  background: green;
  border-radius: 3px;
  color: white;
  margin-top: 20px;
  font-weight: 600;
`;