import {
  GET_TOP_STORIES_SUCCESS,
  GET_TOP_STORIES_FAIL,
  GET_TOP_STORIES_REQUEST,
} from './actions';

const initialState = {
  stories: [],
  isLoading: false,
  error: null,
};

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOP_STORIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOP_STORIES_SUCCESS:
      return {
        ...state,
        stories: action.payload,
        isLoading: false,
      };

    case GET_TOP_STORIES_FAIL:
      return {
        error: action.payload,
      };

    default:
      return state;
  }
};

export default storiesReducer;
