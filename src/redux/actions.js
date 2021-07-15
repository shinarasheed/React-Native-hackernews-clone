import axios from 'axios';
import {BASE_API_URL} from '../constants/baseUrl';
export const GET_TOP_STORIES_REQUEST = 'GET_TOP_STORIES_REQUEST';
export const GET_TOP_STORIES_SUCCESS = 'GET_TOP_STORIES_SUCCESS';
export const GET_TOP_STORIES_FAIL = 'GET_TOP_STORIES_FAIL';

const getStory = async id => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getTopStories = () => async dispatch => {
  try {
    dispatch({
      type: GET_TOP_STORIES_REQUEST,
    });
    const {data: storyIds} = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json`,
    );
    const stories = await Promise.all(
      storyIds.slice(0, 30).map(storyId => getStory(storyId)),
    );

    dispatch({
      type: GET_TOP_STORIES_SUCCESS,
      payload: stories,
    });
  } catch (error) {
    dispatch({
      type: GET_TOP_STORIES_FAIL,
      payload: error,
    });
    console.log('Error while getting list of stories.');
  }
};
