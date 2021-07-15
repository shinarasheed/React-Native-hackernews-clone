import {useState, useEffect} from 'react';
import {getStories} from '../utils/apis';

const useDataFetcher = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories()
      .then(stories => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return {isLoading, stories};
};

export default useDataFetcher;
