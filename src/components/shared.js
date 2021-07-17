import React from 'react';
import {StyleSheet} from 'react-native';

import {TextInput} from 'react-native-paper';

import COLORS from '../constants/colors';

export const UserNameInput = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      style={styles.textInput}
      selectionColor={COLORS.primary}
      outlineColor={COLORS.primary}
      label={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export const PasswordInput = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      style={styles.textInput}
      label={placeholder}
      secureTextEntry={true}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#007bff',
    width: 350,
    height: 50,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    fontSize: 20,
    color: '#fff',
  },

  textInput: {
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
});
