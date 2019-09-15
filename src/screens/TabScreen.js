import React from 'react'
import { View, Text, AsyncStorage, StyleSheet } from 'react-native'
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const HomeScreen = () => {
    return (
        <View style={style.container}>
            <Text>Home Screen</Text>
        </View>
    );
}
  
const SettingScreen = () => {
    return (
        <View style={style.container}>
            <Text>Settings Screen</Text>
        </View>
    );
}

const SignoutScreen = () => {}

const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

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