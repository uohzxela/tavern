import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, Dimensions} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Launch extends React.Component {
    login() {
        Actions.tabbar();
    }
    render(){
        return (
            <Image 
                source={require('../../assets/images/splash.png')} 
                style={styles.backdrop}
            >
                <View style={styles.overlayContainer}>
                  <Icon.Button style={styles.loginButton} name="facebook" backgroundColor="#3b5998" onPress={this.login}>
                    Sign in with Facebook
                  </Icon.Button>
                  <View style={styles.gap} />
                  <Icon.Button style={styles.loginButton} name="google" backgroundColor="#DC4E41" onPress={this.login}>
                    Sign in with Google
                  </Icon.Button>
                  <View style={styles.gap} />
                  <Icon.Button style={styles.loginButton} name="twitter" backgroundColor="#22AFE6" onPress={this.login}>
                    Sign in with Twitter
                  </Icon.Button>
                </View>
                
            </Image>

        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    backdrop: {
        flex: 1,
        width: null,
        height: null,
    },
    overlayContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gap: {
        height: 10
    }
});