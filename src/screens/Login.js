import React from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';

import LoginForm from '../components/LoginForm';

export default class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.headBackground} /> */}

        <KeyboardAvoidingView behavior="position">
          <View>
            <Image
              resizeMode={'contain'}
              style={styles.imageStyle}
              source={require('../../assets/felece.png')} />
            <ScrollView>
              <View style={styles.loginArea}>
                <LoginForm navigation={this.props.navigation} />
              </View>
            </ScrollView>

          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 80
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 300,
    width: '100%',
    backgroundColor: '#1572de'
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2'
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2'
  },
  loginArea: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,

    shadowColor: '#00699B',
    shadowOpacity: .2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 10,
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  loginAreaDesc: {
    fontSize: 11,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center'
  },
  signUpArea: {
    alignItems: 'center',
  },
  signUpDescription: {
    color: '#999'
  },
  signUpText: {
    color: '#666'
  },
  imageStyle: {
    height: 100,
    width: '100%'
  }
});
