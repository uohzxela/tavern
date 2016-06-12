/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS,
  ListView,
  TouchableHighlight,
  TabBarIOS,
} from 'react-native';

// import Header from './Header';
// import Options from './Options';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    paddingBottom: 50
  },

  rowContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#EEF9FE',
    margin: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5
  },
  rowFooter: {
    flexDirection: 'row',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    marginLeft: -10,
    marginRight: -10

  },
  timeLimit: {
    flex: 2,
    padding: 10
  },
  button: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "#ddd",
    padding: 10
  },
  tabBar: {
    height: 50,
  }
});

let dailyTasks = [
  {id: 0, timeLimit: 24, description: "Hold door for 3 people", status: 0},
  {id: 1, timeLimit: 24, description: "Hold door for 3 people", status: 0},
  {id: 2, timeLimit: 24, description: "Hold door for 3 people", status: 0},
  {id: 3, timeLimit: 24, description: "Hold door for 3 people", status: 0},
  {id: 4, timeLimit: 24, description: "Hold door for 3 people", status: 0},
]

let acceptedTasks = [
  {id: 5, timeLimit: 24, description: "Help old lady cross da roadz", status: 1},
  {id: 6, timeLimit: 24, description: "water da plantz", status: 1},
  {id: 7, timeLimit: 24, description: "clap ur hands and sing a songz", status: 1},
  {id: 8, timeLimit: 24, description: "Hold door for 3 people", status: 1},
]

let completedTasks = [
  {id: 9, timeLimit: 24, description: "buy fruits for homeless pplz", status: 2},
]

const taskList = [dailyTasks, acceptedTasks, completedTasks];
const taskType = ['Daily', 'Accepted', 'Completed', 'Custom'];
const taskAction = ['Accept', 'Complete', 'Share'];

export default class Logbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      taskList: taskList[0],
      selectedTab: 'tasks'
    }
  }

  // _onPress() {
  //   const navigator = this.props.navigator;
  //   navigator.push({
  //     component: Options,
  //     index: this.props.route.index + 1,
  //     name: "Options"
  //   });
  // }

  renderRow(rowData, sectionID, rowID) {
    return (

        <View style={styles.rowContainer} >

              <View>
                <Text 
                  style={{
                    fontWeight: "bold",
                    fontSize: 20
                  }}
                > 
                  {taskType[rowData.status]} task 
                </Text>
                <Text 
                  style={{
                    height: 100,
                    paddingTop: 10
                  }}
                > 
                  {rowData.description} 
                </Text>
                <View style={styles.rowFooter}>
                  <Text style={styles.timeLimit}> 
                    {rowData.timeLimit && rowData.timeLimit + " hours limit"}
                    {!rowData.timeLimit && "No time limit"}
                  </Text>
                  <TouchableHighlight 
                    underlayColor="#d7ecff"  
                    style={styles.button}
                  >
                    <Text style={{fontWeight: 'bold'}}> 
                      { taskAction[this.state.selectedIndex] }
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
          
        </View>


    )
  }

  addNewCustomDeed(data) {
    const selectedIndex = data.isCompleted ? 2 : 1
    this.setState({selectedIndex: selectedIndex, taskList: taskList[selectedIndex]})
    setTimeout(() => {
      
      let newTaskList = taskList[selectedIndex]
      newTaskList.unshift({
        id: 123,
        title: data.title,
        timeLimit: data.timeLimit,
        description: data.description,
        status: 3
      })
      this.setState({taskList: newTaskList})

    }, 1000)

  }

  // renderFooter(rowData, sectionID, rowID) {
  //   return (
  //     <View>
  //       <Text> Accept </Text>
  //     </View>
  //   )
  // }

  _onChange(event) {
    const selectedIndex = event.nativeEvent.selectedSegmentIndex
    this.setState({
      selectedIndex: selectedIndex,
      taskList: taskList[selectedIndex],
    })
  }

  selectTab(type) {
    this.setState({selectedTab: type })
  }

  render() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    });
    dataSource = dataSource.cloneWithRows(this.state.taskList)
    return (
      <View style={styles.container}>
        <View style={{paddingHorizontal: 10, marginTop: 30}}>
          <SegmentedControlIOS 
            values={['Daily', 'Accepted', 'Completed']} 
            selectedIndex={this.state.selectedIndex}
            onChange={this._onChange.bind(this)}
            
          />
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
          // renderFooter={this.renderFooter.bind(this)}
        >
        </ListView>
      </View>
    )
  }
}
