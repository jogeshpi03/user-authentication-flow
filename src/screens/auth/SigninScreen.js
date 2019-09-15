import React from 'react';
import { View, Button, AsyncStorage, StyleSheet } from 'react-native';

export default class SigninScreen extends React.Component {

    static navigationOptions = {
        title: 'Sign In',
    };

    _signInHandler = async () => {
        await AsyncStorage.setItem('userToken', 'myToken');
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={style.container}>
                <Button
                    title="Sign in!"
                    onPress={this._signInHandler}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});