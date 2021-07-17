import React from 'react';
import {format} from 'timeago.js';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';

export default function Story({stories}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={stories}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item: {data: story}}) => (
        <TouchableOpacity>
          <Card style={styles.card} mode="outlined">
            <Card.Content>
              <Title style={styles.cardContentTitle}>{story.title}</Title>
              <View style={styles.cardContent}>
                <Paragraph style={styles.paraStyle}>
                  {story.score} points by{' '}
                </Paragraph>
                <Paragraph style={styles.paraStyle}>{story.by}</Paragraph>
                <Paragraph style={styles.paraStyle}>
                  {format(new Date(story.time))}
                </Paragraph>
              </View>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 2,
    marginHorizontal: 5,
  },

  cardContent: {
    flexDirection: 'row',
  },

  cardContentTitle: {
    fontSize: 14,
    lineHeight: 20,
  },

  cardContentText: {
    marginRight: 5,
  },

  paraStyle: {
    fontSize: 14,
  },
});
