import React, {useState} from 'react';
import * as S from './navbar.styles';
import {Link} from 'react-router-dom';

import {useSelector, useDispatch} from 'react-redux';
import { logout } from '../../../redux/actions';

import LoginModal from '../loginModal/loginModal';


const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser);
  
  const [modalType, setModalType] = useState('');

  return (
    <>
      {modalType && 
        <LoginModal 
          modalType={modalType}
          setModalType={setModalType}
        />
      }
      <S.Navbar>
        <S.Title
          as={Link}
          to='/'
        >
          SCHWIFTYPEDIA
        </S.Title>
        <S.NavLinks>
          {currentUser.email ? (
            <>
              <div>{currentUser.email}</div>
              <S.NavLink
                onClick={() => dispatch(logout())}
              >
                LOGOUT
              </S.NavLink>
            </>
          ) : (
            <>
              <S.NavLink
                onClick={() => setModalType('Sign Up')}
              >
                SIGN UP
              </S.NavLink>
              <S.NavLink
                onClick={() => setModalType('Login')}
              >
                LOGIN
              </S.NavLink>
            </>
          )}
        </S.NavLinks>
      </S.Navbar>
    </>
  )
};

export default Navbar;