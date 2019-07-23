import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerButton extends React.Component {

  toggleMenu = () => {
    this.props.navigation.toggleDrawer();
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.toggleMenu}
        style={{ paddingHorizontal: 10 }}>
        <Icon
          name="md-menu"
          size={26}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

});
