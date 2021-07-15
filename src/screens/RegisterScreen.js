import React, {useState, useEffect} from 'react';
import {
  CustomButton,
  UserNameButton,
  PasswordButton,
} from '../components/shared';
import {
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  View,
  Button,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});

export default function RegisterScreen({navigation}) {
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
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), password VARCHAR(20))',
              [],
            );
          }
        },
      );
    });
  }, []);

  const registerUser = () => {
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
        'INSERT INTO table_user (user_name, password) VALUES (?, ?)',
        [username, password],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            console.log(results.rowsAffected);
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                  // onPress: () => navigation.navigate('LoginScreen'),
                },
              ],
              {cancelable: false},
            );

            // console.log(results.rowsAffected);
            // tx.executeSql('SELECT last_insert_rowid()', [], (tx, result) => {
            //   console.log(result);
            // });
          } else Alert.alert('Registration Failed');
        },
      );
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <UserNameButton
            placeholder="username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <PasswordButton
            placeholder="password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button onPress={registerUser} title="Create Account" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
