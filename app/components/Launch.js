import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

export default class Launch extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Launch page</Text>
                <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});