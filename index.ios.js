/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

import Router from './src/app/components/router';

const Thloan = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
              title: '精融汇',
              component: Router,
          }}>
      </NavigatorIOS>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Thloan', () => Thloan);
