import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class PlanCalendar extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Text>PlanCalendar</Text>
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