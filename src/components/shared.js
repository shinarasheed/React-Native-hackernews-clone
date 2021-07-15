import React from 'react';
import {StyleSheet, TouchableOpacity, Text, TextInput} from 'react-native';

export const CustomButton = ({pressButton, title}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={pressButton}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const UserNameButton = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      style={styles.loginInput}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export const PasswordButton = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput
      style={styles.loginInput}
      placeholder={placeholder}
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

  loginInput: {
    width: 350,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});
