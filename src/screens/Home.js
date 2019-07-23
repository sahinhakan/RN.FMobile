import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Home extends Component {
  state = {}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Plan Takvimi"
          onPress={() => navigate('PlanCalendar')} />
        <Button
          title="Danışmanlar"
          onPress={() => navigate('Consultants')} />
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