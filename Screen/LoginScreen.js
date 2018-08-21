import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

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
export default LoginScreen;