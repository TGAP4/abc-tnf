import React, {useState} from 'react';
import * as S from './loginModal.styles';

import { useDispatch } from 'react-redux';
import { signupLogin } from '../../../redux/actions';


const LoginModal = (props) => {
  const {
    modalType,
    setModalType,
  } = props;

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);

    if (!name || !email || !password) return;

    if (modalType === 'Sign Up' && password !== confirmPassword) return;

    dispatch(signupLogin(email));
    setSuccess(true);
  }

  return (
    <>
      {!success ? (
        <S.Modal>
          <S.XButton
            onClick={() => setModalType('')}
          >
            X
          </S.XButton>
          <S.Title>
            {modalType}
          </S.Title>
          <S.Field>
            <div>NAME</div>
            <S.Input 
              type='text'
              onChange={e => setName(e.target.value)}
              value={name}
              error={submitted && !name}
            />
          </S.Field>
          <S.Field>
            <div>EMAIL</div>
            <S.Input 
              type='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
              error={submitted && !email}
            />
          </S.Field>
          <S.Field>
            <div>PASSWORD</div>
            <S.Input 
              type='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
              error={submitted && (!password || (password !== confirmPassword))}
              />
          </S.Field>
          {modalType === 'Sign Up' &&
            <S.Field>
              <div>CONFIRM PASSWORD</div>
              <S.Input 
                type='password'
                onChange={e => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                error={submitted && (!confirmPassword || (password !== confirmPassword))}
                />
            </S.Field>
          }
          <S.Button
            onClick={handleSubmit}
          >
            {modalType}
          </S.Button>
        </S.Modal>
      ) : (
        <S.Modal>
          <S.Title>
            {name} has {modalType === 'Sign Up' ? 'signed up!' : 'logged in!'}
          </S.Title>
          <S.Button
            onClick={() => setModalType('')}
          >
            Close
          </S.Button>
        </S.Modal>
      )}
    </>
  );
}

export default LoginModal;