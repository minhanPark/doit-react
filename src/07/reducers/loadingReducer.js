import { SET_LOADING, RESET_LOADING } from "../actions/loadingActions";

const initialState = false;

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return payload;
    }
    case RESET_LOADING: {
      return initialState;
    }
    default:
      return state;
  }
}
