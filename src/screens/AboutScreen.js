import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function AboutScreen() {
  return (
    <View>
      <Text>About me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
