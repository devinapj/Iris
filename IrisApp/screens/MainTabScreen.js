import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen'
import LoggingScreen from './LoggingScreen'
import LoginScreen from './LoginScreen'
import RegistrationScreen from './RegistrationScreen'
import ReportScreen from './ReportScreen'
import MapScreen from './MapScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();
const LoggerStack = createStackNavigator();
const ReportStack = createStackNavigator();
const MapStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#e91e63',
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="ios-home" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Logger"
            component={LoggerStackScreen}
            options={{
                tabBarLabel: 'Log',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="alert-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Report"
            component={ReportStackScreen}
            options={{
                tabBarLabel: 'Report',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="analytics-outline" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen
            name="Map"
            component={MapStackScreen}
            options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="map-outline" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>

);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#8f48ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'IRIS',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor='#8f48ab' onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }}
        />
        <HomeStack.Screen name="Login" component={LoginScreen} />
        <HomeStack.Screen name="Registration" component={RegistrationScreen} />
    </HomeStack.Navigator>
);

const LoggerStackScreen = ({ navigation }) => (
    <LoggerStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#8f48ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <LoggerStack.Screen name="Logger" component={LoggingScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor='#8f48ab' onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </LoggerStack.Navigator>
);

const ReportStackScreen = ({ navigation }) => (
    <ReportStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#8f48ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ReportStack.Screen name="Report" component={ReportScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor='#8f48ab' onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </ReportStack.Navigator>
);

const MapStackScreen = ({ navigation }) => (
    <MapStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#8f48ab',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <MapStack.Screen name="Map" component={MapScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25}
                    backgroundColor='#8f48ab' onPress={() => navigation.openDrawer()}>
                </Icon.Button>
            )
        }} />
    </MapStack.Navigator>
);