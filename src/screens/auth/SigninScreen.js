import React from 'react';
import Dimensions from 'Dimensions';
import { 
    KeyboardAvoidingView, View, Button, Alert, Text, AsyncStorage, StyleSheet, TextInput
} from 'react-native';


export default class SigninScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '', 
            password: '', 
            spinner: false, 
            error: false
        };

        this._signInHandler = this._signInHandler.bind(this);
    }

    _signInHandler = async () => {
        const {email, password} = this.state;

        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        this.setState({spinner: true});

        const response = await fetch(`https://c282a758.ngrok.io/api/login`, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }, 
            body: formData
        })
        .then(resp => {
            this.setState({spinner: false});
            return resp.json();
        })
        .catch(error => {
            this.setState({spinner: false});
            throw error;
        });

        console.log(response);

        if (typeof response.message != "undefined") {
            await Alert.alert('Error', response.message);
        }
        else {
            await AsyncStorage.setItem('userToken', response.token);
            await AsyncStorage.setItem('userName', response.userData.name);
            this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{flexGrow: 1}} behavior="padding" enabled>
                <View style={style.container}>
                    <TextInput 
                        keyboardType="email-address"
                        onChangeText={email => this.setState({email})}
                        style={style.input}
                        placeholder="Email Address"
                        value={this.state.email}
                    />
                    <TextInput 
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                        style={style.input}
                        placeholder="Password"
                        value={this.state.password}
                    />
                    {this.state.spinner &&
                        <Text style={style.spinnerTextStyle}>Processing ...</Text>
                    }
                    {!this.state.spinner &&
                        <Button
                            title="Sign in!"
                            onPress={this._signInHandler}
                        />
                    }
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const style = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    input: {
        backgroundColor: '#DAE1F1',
        width: DEVICE_WIDTH - 100,
        height: 40,
        marginHorizontal: 20,
        borderRadius: 20,
        color: '#333333',
        marginBottom: 30,
        paddingLeft: 15
    },
    spinnerTextStyle: {
        textAlign: 'center'
    },
});