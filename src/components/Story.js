import React from 'react';
import {format} from 'timeago.js';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

export default function Story({stories}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={stories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item: {data: story}}) => (
        <TouchableOpacity style={styles.card}>
          <View>
            <View>
              <Text style={styles.cardText}>{story.title}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardContentText}>
                {story.score} points by{' '}
              </Text>
              <Text style={styles.cardContentText}>{story.by}</Text>
              <Text style={styles.cardContentText}>
                {format(new Date(story.time))}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    paddingVertical: 20,
    paddingRight: 5,
    paddingLeft: 10,
    justifyContent: 'center',
    marginBottom: 5,
    marginHorizontal: 8,
  },

  cardContent: {
    flexDirection: 'row',
  },

  cardText: {
    fontSize: 15,
    color: '#000',
  },

  cardContentText: {
    marginRight: 5,
  },
});
