import {
  SIGNIN,
  SIGNIN_SUCCESS,
  GET_SUCCESS,
  ERROR,
  UNAUTHORIZED,
  SHOW_APPOINTMENT_MODAL,
} from "../actions/auth";

const initialState = {
  access_token: null,
  show_appointment_modal: false,
  signin_success: false,
  user: {
    email: null,
    password: null,
  },
  errors: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return { ...state, user: { ...initialState.user }, errors: {} };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...action.payload.user },
        access_token: action.payload.access_token,
        signin_success: action.payload.success,
      };
    case SHOW_APPOINTMENT_MODAL:
      return {
        ...state,
        show_appointment_modal: action.payload,
      };
    case ERROR:
      return { ...state, errors: action.payload };
    case UNAUTHORIZED:
      return { ...state, access_token: null };
    case GET_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
}
