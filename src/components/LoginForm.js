import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import MyInput from './MyInput';
import MyButton from './MyButton';

import oData from '../../util/oDataHelper';

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      textInput: false,
      currentConsultant: {}
    };
  }

  render() {

    return (
      <View>
        {/* <Text style={styles.signInText}>Sign In</Text> */}

        <MyInput
          value={this.state.username}
          returnKeyType="next"
          autoCapitalize="none"
          placeholder="Kullanıcı Adı"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(un) => this.setState({ username: un })}
        />

        <MyInput
          value={this.state.password}
          returnKeyType="go"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Şifre"
          inputRef={input => this.passwordInput = input}
          onChangeText={(ps) => this.setState({ password: ps })}
        />

        <MyButton
          color={"#f1f1f1"}
          backgroundColor={"#00699B"}
          text={"Giriş"}
          onPress={() => this.initialODataConfigAndLoginAttempt()}
        />

      </View>

    );
  }

  initialODataConfigAndLoginAttempt() {

    console.log(this.state.username);
    console.log(this.state.password);

    if (this.state.username && this.state.password) {
      //// FIXME: Global olarka saklnanalı - redux
      oData().config({
        username: this.state.username,
        password: this.state.password,
        isWithCredentials: true
      });

    } else {
      Alert.alert('HATA', 'Kullanıcı adı veya şifre alanı boş olamaz !');
      return;
    }



    oData('CurrentConsultant')
      .get()
      .then((res) => {
        console.log(res.data.d.results[0]);
        this.setState({
          currentConsultant: res.data.d.results[0]
        });
        //alert(`Hosgeldin ${res.data.d.results[0].ConsName}`);
        this._signInAsync();
      }).fail((err) => {
        //// FIXME:  Alert ekle
        console.log(err);
        alert('HATA', 'Error code : ' + err.status);
      });

  }

  _signInAsync = async () => {

    await AsyncStorage.setItem('userToken', JSON.stringify(this.state.currentConsultant));
    await AsyncStorage.setItem('username', this.state.username);
    await AsyncStorage.setItem('password', this.state.password);

    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({

});