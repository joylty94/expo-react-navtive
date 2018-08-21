import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

class LoginScreen extends Component{
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
export default LoginScreen;