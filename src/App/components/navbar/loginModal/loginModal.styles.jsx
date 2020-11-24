import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #EEEEEE;
  padding: 40px 50px;
  margin: auto;
  border-radius: 5px;
  font-weight: 500;
  position: absolute;
  z-index: 100;
  top: 45px;
  left: calc(50% - 166px);
  box-shadow: 0 30px 30px black;
`;

export const XButton = styled.div`
  color: gray;
  position: absolute;
  top: 10px;
  right: 12px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 28px;
  line-height: 28px;
  font-weight: 700;
`;

export const Field = styled.div`
  margin-top: 18px;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid ${({error}) => error ? 'orange' : 'black'};
  padding: 10px 15px;
  width: 200px;
  margin-top: 5px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  cursor: pointer;
  background: green;
  margin-top: 25px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
`;