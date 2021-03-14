import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();


function App() {
  return (

    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/*<Drawer.Screen name="Logging" component={ProfileStackScreen} />*/}
      </Drawer.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#ffff',
  },

});
export default App;