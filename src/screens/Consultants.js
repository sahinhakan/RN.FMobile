import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Consultants extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Text>Consultants</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})