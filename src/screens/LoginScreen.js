import React, {useState, useEffect} from 'react';
import {UserNameInput, PasswordInput} from '../components/shared';
import {Button} from 'react-native-paper';

import {Alert, StyleSheet, View} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), password VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

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
        'SELECT user_name from table_user WHERE user_name=? AND password=?',
        [username, password],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            navigation.navigate('HomeScreen');
          } else alert('Login Failed');
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
