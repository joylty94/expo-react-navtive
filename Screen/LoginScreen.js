import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen'

class LoginScreen extends Component{
    static navigationOptions = {
        headerTitle: 'Login',
        headerRight: (<Button onPress={()=>alert('button')}
                        title="button"/>)
    }
    render(){
        return(
            <View>
                <Text>This is the Login Screen</Text>
                <Button onPress={()=>this.props.navigation.navigate('HomeScreen')}
                title="Home Screen"/>
            </View>
        )
    }
}

const LoginScreenStackNavigator = createStackNavigator({
    LoginScreen: {
        screen: LoginScreen
    },
    HomeScreen: {
        screen: HomeScreen
    }
})
export default LoginScreenStackNavigator;