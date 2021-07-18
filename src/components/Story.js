import React from 'react';
import {format} from 'timeago.js';
import TimeAgo from 'react-native-timeago';
import moment from 'moment';
import {Card, Title, Paragraph} from 'react-native-paper';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';

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
                  {moment.unix(story.time).fromNow()}
                </Paragraph>

                <Paragraph style={styles.paraStyle}>
                  {story.descendants}comments
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
    fontSize: 15,
    lineHeight: 20,
  },

  cardContentText: {
    marginRight: 5,
  },

  paraStyle: {
    fontSize: 13,
    marginRight: 3,
  },
});
