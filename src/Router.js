import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AuthLoading from './screens/AuthLoading';
import Login from './screens/Login';
import Home from './screens/Home';
import PlanCalendar from './screens/PlanCalendar';
import Consultants from './screens/Consultants';

import DrawerButton from './components/DrawerButton';
import Icon from 'react-native-vector-icons/Ionicons';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

const AppStack = createStackNavigator({
  Home: {
    screen: Home
  },
  PlanCalendar,
  Consultants
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />
    })
  });

const PlanCalendarStack = createStackNavigator({
  PlanCalendar
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppStack,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: 'Ana Sayfa',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="ios-home"
          size={22}
          color={tintColor}
        />
      )
    })
  },
  PlanCalendar: {
    screen: PlanCalendar,
    navigationOptions: {
      drawerLabel: 'Plan Takvimi',
      drawerIcon: ({ tintColor }) => (
        // içerde tintColor'ı atarsam yazı rengi ile aynı olur
        <Icon
          name="md-calendar"
          size={22}
          color={tintColor}
        />
      )
    }
  },
  Consultants: {
    screen: Consultants,
    navigationOptions: {
      drawerLabel: 'Danışmanlar',
      drawerIcon: ({ tintColor }) => (
        // içerde tintColor'ı atarsam yazı rengi ile aynı olur
        <Icon
          name="md-contacts"
          size={22}
          color={tintColor}
        />
      )
    }
  }
}, {
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#1572de',
      activeBackgroundColor: '#1572de',
      inactiveBackgroundColor: '#fff'
    }
  });

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoading,
  App: AppDrawerNavigator,
  Auth: AuthStack,
},
  {
    initialRouteName: 'AuthLoading',
  });

export default createAppContainer(SwitchNavigator);