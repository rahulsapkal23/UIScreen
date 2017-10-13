/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';


import screen1 from './screen/screen1';
import screen2 from './screen/screen2';





export default class main extends Component {
  render() {
    return (
    <Tabs />
    );
  }
}


const Tabs = StackNavigator({
 screen1: {
    screen: screen1

  },
  screen2: {
    screen: screen2

  },
  
 
  
}, {initialRouteName: 'screen2'});

