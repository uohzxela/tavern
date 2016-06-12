/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import Launch from './app/components/Launch';
import Logbook from './app/components/Logbook';
import CreateTask from './app/components/CreateTask';
import Achievements from './app/components/Achievements';
import Community from './app/components/Community';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'blue' :'black', fontSize: 11}}>{this.props.title}</Text>
        );
    }
}

class Tavern extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="launch" component={Launch} title="Launch" initial={true} style={{flex:1, backgroundColor:'transparent'}}/>
          <Scene key="tabbar" tabs={true} style={{borderTopColor: "#ddd", borderTopWidth: 1, backgroundColor: '#EFEFF2'}}>
              <Scene key="community"  title="Community" icon={TabIcon} component={Community} />
              <Scene key="logbook" hideNavBar={true} title="Logbook" icon={TabIcon} component={Logbook}/>
              <Scene key="createTask" component={CreateTask} title="Create Task" icon={TabIcon} onRight={()=>alert("Create task")} rightTitle="Done" />
              <Scene key="donate" component={PageOne} title="Donate" icon={TabIcon} />
              <Scene key="achievements" component={Achievements} title="Achievements" icon={TabIcon} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Tavern', () => Tavern);
