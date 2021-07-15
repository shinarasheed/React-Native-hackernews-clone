import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getTopStories} from '../redux/actions';
import {connect} from 'react-redux';

import Story from '../components/Story';

const HomeScreen = ({stories, isLoading, getTopStories}) => {
  useEffect(() => {
    getTopStories();
  }, [getTopStories]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <Text>Loading Stories...</Text>
        </View>
      ) : (
        <Story stories={stories} />
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  stories: state.topStories.stories,
  isLoading: state.topStories.isLoading,
});

export default connect(mapStateToProps, {getTopStories})(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  containerText: {
    fontSize: 20,
  },
});
