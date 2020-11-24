import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background: #EEEEEE;
  padding: 40px 50px;
  border-radius: 5px;
  font-weight: 500;
  position: absolute;
  z-index: 100;
  top: 45px;
  left: calc(50% - 240px);
  box-shadow: 0 30px 30px black;
  width: 380px;

  @media (max-width: 500px) {
    width: calc(95% - 100px);
    left: 2.5%;
  }
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
  line-height: 32px;
  font-weight: 800;
  text-align: center;
`;

export const Info = styled.div`
  height: 250px;
  padding: 10px 0;
  overflow-y: auto;
`;

export const Label = styled.div`
  font-weight: 800;
  margin: 15px 0 3px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  cursor: pointer;
  background: green;
  margin-top: 5px;
  border-radius: 3px;
  color: white;
  font-weight: 600;
`;