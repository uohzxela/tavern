'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    paddingTop: 80

  },
  countContainer: {
    height: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 30,
    marginTop: 5
  },
  yourDeeds: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  deedCount: {
    fontSize: 100,
    color: '#0D91FC',
    textAlign: 'center',
    marginTop: 40
  }
});

export default class Achievements extends Component {
  constructor() {
    super()
    this.state = {
      yourDeedCount: 20,
      globalDeedCount: 1000
    }
  }

  componentDidMount() {
    const ctx = this
    setInterval(() => {
      ctx.setState({
        globalDeedCount: Math.floor(this.state.globalDeedCount + (Math.random() * 10 + 1))
      })
    }, 100)
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.yourDeeds}> Good deeds you accomplished </Text>
          <View style={styles.countContainer}>
            <Text style={styles.deedCount}> {this.state.yourDeedCount} </Text>
          </View>
          <Text style={styles.yourDeeds}> Global good deeds accomplished </Text>
          <View style={styles.countContainer}>
            <Text style={styles.deedCount}> {this.state.globalDeedCount} </Text>
          </View>
      </View>
    )
  }
}