import {
  LOG_IN,
  LOG_IN_FULFILLED, 
  LOG_IN_REJECTED, 
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED
} from '../constants/auth'

const initialState = {
  email: '',
  phone: '',
  name: '',
  isLogged: false,
  errorMessage: '',
  errorItem: ''
};

export default function(state = initialState, action) {

  switch(action.type) {

    case LOG_IN_FULFILLED :
    case SIGN_UP_FULFILLED :
      return {
        ...state,
        email: action.payload.data.email,
        phone: action.payload.data.phone,
        name: action.payload.data.name,
        isLogged: true
      };

      break;

    case LOG_IN_REJECTED :
      return {
        ...state,
        errorMessage: action.payload.response.data.msg,
        errorItem: action.payload.response.data.item
      };

      break;

    default:
      return state;
      break;
  };

}