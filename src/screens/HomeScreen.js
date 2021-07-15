import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
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
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00ff00" />
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
    marginVertical: 5,
  },
  containerText: {
    fontSize: 20,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
