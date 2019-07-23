import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import AuthLoading from './screens/AuthLoading';
import Login from './screens/Login';
import Home from './screens/Home';
import PlanCalendar from './screens/PlanCalendar';
import Consultants from './screens/Consultants';

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
  Home: Home,
  PlanCalendar,
  Consultants
}, {
    initialRouteName: 'Home'
  });

const PlanCalendarStack = createStackNavigator({
  PlanCalendar
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Ana Sayfa',
      drawerIcon: ({ tintColor }) => (
        // içerde tintColor'ı atarsam yazı rengi ile aynı olur
        <Icon
          name="ios-home"
          size={22}
          color={tintColor}
        />
      )
    }
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