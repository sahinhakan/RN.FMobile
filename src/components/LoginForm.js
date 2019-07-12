import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyInput from './MyInput';
import MyButton from './MyButton';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        {/* <Text style={styles.signInText}>Sign In</Text> */}

        <MyInput
          returnKeyType="next"
          autoCapitalize="none"
          placeholder="Kullanıcı Adı"
          onSubmitEditing={() => this.passwordInput.focus()}
        />

        <MyInput
          returnKeyType="go"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Şifre"
          inputRef={input => this.passwordInput = input}
        />

        <MyButton
          color={"#f1f1f1"}
          backgroundColor={"#00699B"}
          text={"Giriş"} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333'
  }
});