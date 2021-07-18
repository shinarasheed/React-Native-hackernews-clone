import React, {useState} from 'react';
import {UserNameInput, PasswordInput} from '../components/shared';
import {Button} from 'react-native-paper';

import {Alert, StyleSheet, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username) {
      Alert.alert('Please fill username');
      return;
    }

    if (!password) {
      Alert.alert('Please fill password');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'SELECT * FROM table_user WHERE user_name=? AND password=?',
        [username, password],
        (tx, results) => {
          navigation.navigate('HomeScreen');
        },
      );
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <UserNameInput
          placeholder="username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <PasswordInput
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button
          dark={true}
          accessibilityLabel="button"
          mode="contained"
          onPress={handleLogin}>
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
