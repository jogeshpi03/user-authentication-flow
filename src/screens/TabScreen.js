import React from 'react'
import { AsyncStorage } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

const SignoutScreen = () => {}

export const TabScreen = createBottomTabNavigator({
    Home: {
        screen: HomeScreen, 
        navigationOptions: {
            tabBarLabel: 'Home', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-home" color={tintColor} size={25} />
            )
        }
    }, 
    Settings: {
        screen: SettingScreen, 
        navigationOptions: {
            tabBarLabel: 'Settings', 
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-settings" color={tintColor} size={25} />
            )
        }
    }, 
    Signout: {
        screen: SignoutScreen, 
        navigationOptions: {
            tabBarLabel: 'Signout', 
            tabBarIcon: ({ tintColor }) => (
                <SimpleLineIcons name="logout" color={tintColor} size={20} />
            ), 
            tabBarOnPress: async ({navigation}) => {
                await AsyncStorage.clear();
                navigation.navigate('Auth');
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'red', 
        inactiveTintColor: 'grey', 
        showIcon: true
    }
});