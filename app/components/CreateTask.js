'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch
} from 'react-native';
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 80,
    backgroundColor: 'white'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    padding: 10
  },
  descriptionInput: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    padding: 10,
    fontSize: 17
  },
  completedSwitch: {
    margin: 20,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  }
});

export default class CreateTask extends Component {
  constructor() {
    super()
    this.state = {
      isCompleted: false,
      title: "",
      description: "",
      timeLimit: "",
    }
  }

  getDeed() {
    return this.state
  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            ref="titleInput"
            style={styles.textInput}
            placeholder={"Title"}
            onChangeText={(value) => this.setState({title: value})}
          />
          <TextInput
            ref="timeInput"
            style={styles.textInput}
            placeholder={"Time limit (if any)"}
            onChangeText={(value) => this.setState({timeLimit: value})}
          />
          <TextInput
            ref="descriptionInput"
            style={styles.descriptionInput}
            placeholder={"Add description here"}
            multiline={true}
            onChangeText={(value) => this.setState({description: value})}
          />
          <View style={styles.completedSwitch}>
            <Text 
              style={{
                flex: 2, fontSize: 17, paddingTop: 4, color: this.state.isCompleted ? 'black' : '#ddd' 
            }}> 
              Completed 
            </Text>
            <Switch
              value={this.state.isCompleted}
              onValueChange={(value) => this.setState({isCompleted: value})}
            />
          </View>
      </View>
    )
  }
}