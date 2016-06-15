'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from 'react-native-button';

const DAILY_TASK = "task3";

const IMAGE_MARGIN = 20;
const IMAGE_WIDTH = (Dimensions.get('window').width)/2 - IMAGE_MARGIN * 2 ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  acceptButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 210,
    backgroundColor: '#4A90E2',
    borderRadius: 10
  },
  createButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: 210,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#4A90E2' 
  },
  taskPhoto: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    borderRadius: IMAGE_WIDTH/2
  },
  taskName: {
    fontSize: 30,
    color: "#087EFF",
    margin: 20
  },
  taskDescription: {
    fontSize: 16,
    marginBottom: 20,
    width: 300
  }
});

export default class DailyTask extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    const task = this.props.tasks[DAILY_TASK];
    return (
      <View style={styles.container}>
        <Image 
            style={styles.taskPhoto}
            resizeMode={Image.resizeMode.cover} 
            source={{uri: task.photoUrl}} 
        />
        <Text style={styles.taskName}>{task.name}</Text>
        <Text style={styles.taskDescription}>{task.description}</Text>
        <Button containerStyle={styles.acceptButton} style={{color: "white"}}>
          Accept
        </Button>
        <Text style={{marginVertical: 10, color: "#087EFF", fontSize: 20}}> OR </Text>
        <Button onPress={Actions.createTask} containerStyle={styles.createButton} style={{color: "#4A90E2"}}>
          Create Custom Task
        </Button>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DailyTask);