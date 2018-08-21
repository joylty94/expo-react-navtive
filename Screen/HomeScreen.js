import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>This is the Home Screen</Text>
            </View>
        )
    }
}

class Notifications extends Component {
    render() {
        return (
            <View>
                <Text>This is the Notifications Screen</Text>
            </View>
        )
    }
}

const HomeScreenTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    Notifications: {
        screen: Notifications
    }
},  
{
    animationEnabled: true
})

export default HomeScreenTabNavigator;