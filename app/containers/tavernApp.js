/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

import PageOne from '../../PageOne';
import PageTwo from '../../PageTwo';
import Launch from '../components/Launch';
import Profile from '../components/Profile';
import CreateTask from '../components/CreateTask';
import Achievements from '../components/Achievements';
import Community from '../components/Community';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'blue' :'black', fontSize: 11}}>{this.props.title}</Text>
        );
    }
}

export default class TavernApp extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="launch" component={Launch} title="Launch" initial={true} style={{flex:1, backgroundColor:'transparent'}}/>
          <Scene key="tabbar" tabs={true} style={{borderTopColor: "#ddd", borderTopWidth: 1, backgroundColor: '#EFEFF2'}}>
              <Scene key="communityTab"  title="Community" icon={TabIcon}>
                <Scene key="community" title="Community" component={Community} />
                <Scene key="otherProfile" title="Profile" component={Profile} />
              </Scene>
              <Scene key="profile" title="Profile" icon={TabIcon} component={Profile}/>
              <Scene key="createTask" component={CreateTask} title="Create Task" icon={TabIcon} onRight={()=>alert("Create task")} rightTitle="Done" />
              <Scene key="donate" component={PageOne} title="Donate" icon={TabIcon} />
              <Scene key="achievements" component={Achievements} title="Achievements" icon={TabIcon} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}
