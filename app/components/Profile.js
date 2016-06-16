'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image,
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import * as myActions from '../actions/myActions';
import { connect } from 'react-redux';

import {AchievementScrollViews} from './Achievements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: 'white',
    paddingBottom: 50
  },

  rowContainer: {
    padding: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,

  },
  rowFooter: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 20,
    marginBottom: -5
  },
  myPhoto: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    // borderColor: "gray",
    // borderWidth: 2
  },
  userName: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: 'bold'
  },
  userStatus: {
    fontWeight: 'normal'
  },
  userInfo: {
    flex: 2, 
    backgroundColor: 'transparent', 
    marginBottom: 10
  },
  time: {
    color: "gray",
    textAlign: 'left'
  },
  message: {
    textAlign: "left",
    fontSize: 16
  },
  button: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: "#ddd",
    padding: 10
  },
  actionIcon: {
    marginHorizontal: 10,
    marginVertical: 5,
    width: 20
  },
  typeText: {
    textAlign: 'center',
    fontSize: 12
  },
  typeCountText: {
    textAlign: 'center',
    fontSize: 25
  },
  typeTextSelected: {
    textAlign: 'center',
    fontSize: 12,
    color: '#087EFF'
  },
  typeCountTextSelected: {
    textAlign: 'center',
    fontSize: 25,
    color: '#087EFF'
  },
  currentUserInfo: {
    marginTop: 30, 
    flexDirection: 'row', 
    padding: 20, 
    borderBottomColor: '#ddd', 
    borderBottomWidth: 1
  },
  myName: {
    fontSize: 25, 
    fontWeight: 'bold', 
    textAlign:'center',
  },
  myTeam: {
    fontSize: 20, 
    textAlign:'center', 
    marginVertical: 10
  },
  shareButton: {
      backgroundColor: '#4A90E2',
      borderRadius: 5,
      paddingHorizontal: 10,
      paddingVertical: 5
  }
});

const ACCEPTED = 0,
      COMPLETED = 1,
      REQUESTS = 2,
      ACHIEVEMENTS = 3;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: ACCEPTED,
    }
  }

  renderRow(rowData, sectionID, rowID) {
    let taskFooterMap = {};
    taskFooterMap[REQUESTS] = (
      <View style={styles.rowFooter}>
        <TouchableHighlight 
          underlayColor="transparent"  
          onPress={this.props.actions.acceptTask.bind(this, rowData.token)}
          style={styles.actionIcon}
        >
          <Image 
            source={
              require('../../assets/images/add.png')
            }
          />
        </TouchableHighlight>
      </View>
    );

    taskFooterMap[COMPLETED] = (
      <View style={styles.rowFooter}>
        <TouchableHighlight underlayColor="transparent" onPress={()=>{}}>
          <Icon style={{fontSize: 25, color: "#087EFF"}} name="share-square-o" />
        </TouchableHighlight>
      </View>
    );

    taskFooterMap[ACCEPTED] = (
      <View style={styles.rowFooter}>
        <TouchableHighlight 
          underlayColor="transparent"  
          onPress={this.props.actions.completeTask.bind(this, rowData.token)}
          style={styles.actionIcon}
        >
          <Image 
            source={
              require('../../assets/images/tick.png')
            }
          />
        </TouchableHighlight>
      </View>
    );
    const isMyProfile = this.getCurrentProfile().token === this.props.me.token;
    return (

        <View style={styles.rowContainer}>
          <View style={{flexDirection: 'row'}}>
       
            <Image 
              resizeMode={Image.resizeMode.contain} 
              style={styles.userPhoto} 
              source={{uri: rowData.photoUrl}} 
            />
         
            <View style={styles.userInfo}>
              <Text style={styles.userName}> 
                {rowData.name} 
                <Text style={styles.userStatus}> {rowData.status}</Text>
              </Text>
              <Text style={styles.time}>
                {rowData.timeLimit ? 
                  "Time limit: " + rowData.timeLimit :
                  "No time limit" } 
              </Text>
            </View>
          </View>
          <View >
            <Text style={styles.message}>{rowData.description} </Text>
          </View>
          { (!this.props.navigationState.userToken) && 
            taskFooterMap[this.state.selectedType] }
        </View>


    )
  }

  selectType(index) {
    this.setState({selectedType: index});
  }

  getCurrentProfile() {
    const otherUserToken = this.props.navigationState.userToken;
    const profile = otherUserToken ? this.props.users[otherUserToken] : this.props.me;
    return profile; 
  }

  getTasks(index) {
    const profile = this.getCurrentProfile();
    const taskTokens = {
      0: profile.acceptedTasks,
      1: profile.completedTasks,
      2: profile.requests 
    }
    if (!taskTokens[index]) return null;
    const taskList = taskTokens[index].map((token) => {
      return this.props.tasks[token];
    });
    return taskList;
  }
  render() {
    const isMyProfile = this.getCurrentProfile().token === this.props.me.token;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const profile = this.getCurrentProfile();
    return (
      <View style={styles.container}>
        <View style={styles.currentUserInfo}>
          <Image 
            resizeMode={Image.resizeMode.contain} 
            style={styles.myPhoto} 
            source={{uri: profile.photoUrl}} 
          />
          <View style={{flex: 1, flexDirection:'column'}}>
            <Text style={styles.myName}>
              {profile.name}
            </Text>
            <View style={{flex: 2}}>
              <Text style={styles.myTeam}>Team: {profile.team}</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <TypeText 
                  onPress={this.selectType.bind(this, ACCEPTED)} 
                  isSelected={this.state.selectedType === ACCEPTED} 
                  count={profile.acceptedTasks.length} 
                  type="Accepted" 
                />
                <TypeText 
                  onPress={this.selectType.bind(this, COMPLETED)} 
                  isSelected={this.state.selectedType === COMPLETED} 
                  count={profile.completedTasks.length} 
                  type="Completed" 
                />
                { this.props.navigationState.userToken ?
                  <TypeText 
                    onPress={this.selectType.bind(this, ACHIEVEMENTS)} 
                    isSelected={this.state.selectedType === ACHIEVEMENTS} 
                    count={profile.achievementsEarned.length} 
                    type="Achievements" 
                  /> :

                  <TypeText 
                    onPress={this.selectType.bind(this, REQUESTS)} 
                    isSelected={this.state.selectedType === REQUESTS} 
                    count={profile.requests.length} 
                    type="Requests" 
                  />
                }
              </View>
            </View>
          </View>
        </View>
        { this.state.selectedType !== ACHIEVEMENTS ?
          <ListView
            dataSource={dataSource.cloneWithRows(this.getTasks(this.state.selectedType))}
            renderRow={this.renderRow.bind(this)}
            enableEmptySections={true}
          /> :
          <AchievementScrollViews {...this.props} userToken={this.getCurrentProfile().token} />
        }
        

      </View>
    )
  }
}

class TypeText extends Component {
  render() {
    return (
      <TouchableHighlight 
        underlayColor={"transparent"} 
        style={{flex: 1}} 
        onPress={this.props.onPress}
      >
        <View>
          <Text 
            style={this.props.isSelected ? 
              styles.typeCountTextSelected : 
              styles.typeCountText }
            >
              {this.props.count}
            </Text>
          <Text 
            style={this.props.isSelected ? 
              styles.typeTextSelected : 
              styles.typeText }
            >
              {this.props.type}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const mapStateToProps = (state) => ({
  me : state.me,
  users: state.users,
  tasks: state.tasks,
  achievements: state.achievements,
})

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(myActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
