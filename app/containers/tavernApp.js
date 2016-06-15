import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

import Launch from '../components/Launch';
import Profile from '../components/Profile';
import CreateTask from '../components/CreateTask';
import DailyTask from '../components/DailyTask';
import FindCompanions from '../components/FindCompanions';
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

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="launch" hideNavBar={true} duration={1} component={Launch} title="Launch" initial={true} style={{flex:1, backgroundColor:'transparent'}}/>
    <Scene key="tabbar" tabs={true} style={{borderTopColor: "#ddd", borderTopWidth: 1, backgroundColor: '#EFEFF2'}}>
        <Scene key="communityTab"  title="Community" icon={CommunityIcon}>
          <Scene key="community" title="Community" component={Community} />
          <Scene key="otherProfile" title="Profile" component={Profile} />
        </Scene>
        <Scene key="profile" title="Profile" icon={ProfileIcon} component={Profile}/>
        <Scene key="taskTab" title="Task" icon={TaskIcon}>
          <Scene key="dailyTask" component={DailyTask} title="Daily Task" />
          <Scene key="createTask" component={CreateTask} title="Create Task" onRight={()=>{Actions.findCompanions()}} rightTitle="Next" />
          <Scene key="findCompanions" component={FindCompanions} title="Find Companions" onRight={()=>alert("Task created!")} rightTitle="Done" />
          <Scene key="otherProfile_Task" title="Profile" component={Profile} />
        </Scene>    
        <Scene key="volunteer" component={Volunteer} title="Volunteer" icon={VolunteerIcon} />
        <Scene key="achievements" component={Achievements} title="Achievements" icon={AchievementsIcon} />
    </Scene>
  </Scene>
);

export default class TavernApp extends Component {
  render() {
    return (
      <Router scenes={scenes}/>
    )
  }
}
