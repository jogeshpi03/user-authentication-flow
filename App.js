import { TabScreen } from './src/screens/TabScreen'
import SignScreen from './src/screens/auth/SigninScreen'
import AuthLoadingScreen from './src/screens/AuthLoadingScreen'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


const AppStack = createStackNavigator({ TabScreen });
const AuthStack = createStackNavigator({ Signin: SignScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen, 
        App: AppStack, 
        Auth: AuthStack
    }, 
    {
        initialRouteName: 'AuthLoading'
    }
));
