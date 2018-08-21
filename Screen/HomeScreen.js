import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

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

const HomeScreenTabNavigator = createMaterialTopTabNavigator(
    {
        HomeScreen: { screen: HomeScreen },
        Notifications: { screen: Notifications },
    },
    {
        navigationOptions: () => ({ 
            headertitle: `Home`,
            headerBackTitle: null,
            headerTruncatedBackTitle: `to A`
        })
    }
)

export default HomeScreenTabNavigator;