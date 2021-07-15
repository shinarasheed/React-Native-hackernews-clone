import axios from 'axios';
import {BASE_API_URL} from '../constants/baseUrl';

const getStory = async id => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Error while getting a story.');
  }
};

export const getStories = async () => {
  try {
    const {data: storyIds} = await axios.get(
      `https://hacker-news.firebaseio.com/v0/topstories.json`,
    );
    const stories = await Promise.all(
      storyIds.slice(0, 30).map(storyId => getStory(storyId)),
    );
    return stories;
  } catch (error) {
    console.log('Error while getting list of stories.');
  }
};
