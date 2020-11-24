import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  background: black;
  color: white;

  @media (max-width: 500px) {
    padding-bottom: 15px;
  }
`;

export const Title = styled.div`
  margin: 20px auto;
  font-weight: 700;
  font-size: 36px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  z-index: 10;

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: absolute;
  right: 25px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 100%;
    right: 0;
    padding: 0 4vw;
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    margin-top: 30px;
    padding: 0 18vw;
  }
`;

export const NavLink = styled.div`
  margin: 0 15px;
  cursor: pointer;

  @media (max-width: 800px) {
    margin: 0;
  }
`;