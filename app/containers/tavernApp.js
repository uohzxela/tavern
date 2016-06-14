/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

import PageOne from '../../PageOne';
import PageTwo from '../../PageTwo';
import Launch from '../components/Launch';
import Profile from '../components/Profile';
import CreateTask from '../components/CreateTask';
import Achievements from '../components/Achievements';
import Community from '../components/Community';
import Volunteer from '../components/Volunteer';

class CommunityIcon extends React.Component {
    render(){
        return (
          <Image 
            source={
              this.props.selected ? 
              require('../../assets/images/community_selected.png') : 
              require('../../assets/images/community.png')
            }
          />
        );
    }
}

class ProfileIcon extends React.Component {
    render(){
        return (
          <Image 
            source={
              this.props.selected ? 
              require('../../assets/images/profile_selected.png') : 
              require('../../assets/images/profile.png')
            }
          />
        );
    }
}

class TaskIcon extends React.Component {
    render(){
        return (
          <Image 
            source={
              this.props.selected ? 
              require('../../assets/images/task_selected.png') : 
              require('../../assets/images/task.png')
            }
          />
        );
    }
}

class VolunteerIcon extends React.Component {
    render(){
        return (
          <Image 
            source={
              this.props.selected ? 
              require('../../assets/images/volunteer_selected.png') : 
              require('../../assets/images/volunteer.png')
            }
          />
        );
    }
}

class AchievementsIcon extends React.Component {
    render(){
        return (
          <Image 
            source={
              this.props.selected ? 
              require('../../assets/images/achievements_selected.png') : 
              require('../../assets/images/achievements.png')
            }
          />
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
              <Scene key="communityTab"  title="Community" icon={CommunityIcon}>
                <Scene key="community" title="Community" component={Community} />
                <Scene key="otherProfile" title="Profile" component={Profile} />
              </Scene>
              <Scene key="profile" title="Profile" icon={ProfileIcon} component={Profile}/>
              <Scene key="createTask" component={CreateTask} title="Create Task" icon={TaskIcon} onRight={()=>alert("Create task")} rightTitle="Done" />
              <Scene key="volunteer" component={Volunteer} title="Volunteer" icon={VolunteerIcon} />
              <Scene key="achievements" component={Achievements} title="Achievements" icon={AchievementsIcon} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}
