import {persistReducer} from 'redux-persist';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import {
  SIGNUP_LOGIN,
  LOGOUT,
} from './types';


const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    createWhitelistFilter('reducer', ['currentUser'])
  ]
};


const INITIAL_STATE = {
  currentUser: {},
  modal: { open: false },
};


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP_LOGIN:
      return {
        ...state,
        currentUser: {email: action.payload},
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: {},
      };
    default:
      return {...state};
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;