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

import { bindActionCreators } from 'redux';
import * as myProfileActions from '../actions/myProfileActions';
import { connect } from 'react-redux';

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
    fontSize: 15
  },
  typeCountText: {
    textAlign: 'center',
    fontSize: 25
  },
  typeTextSelected: {
    textAlign: 'center',
    fontSize: 15,
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
  }
});

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: 0,
    }
  }

  renderRow(rowData, sectionID, rowID) {
    let taskFooterMap = {};
    taskFooterMap[2] = (
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

    taskFooterMap[1] = (
      <View style={styles.rowFooter}>
        <TouchableHighlight 
          underlayColor="transparent"  
          onPress={this.props.actions.acceptTask.bind(this, rowID)}
          style={styles.actionIcon}
        >
        </TouchableHighlight>
      </View>
    );

    taskFooterMap[0] = (
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
    const isMyProfile = this.getCurrentProfile().token === this.props.myProfile.token;
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
          { (isMyProfile && this.state.selectedType !== 1) && taskFooterMap[this.state.selectedType] }
        </View>


    )
  }

  selectType(index) {
    this.setState({selectedType: index});
  }

  getCurrentProfile() {
    const otherUserToken = this.props.navigationState.userToken;
    const profile = otherUserToken ? this.props.users[otherUserToken] : this.props.myProfile;
    return profile; 
  }

  getTasks(index) {
    const profile = this.getCurrentProfile();
    const taskTokens = {
      0: profile.acceptedTasks,
      1: profile.completedTasks,
      2: profile.requests 
    }
    const taskList = taskTokens[index].map((token) => {
      return this.props.tasks[token];
    });
    return taskList;
  }
  render() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    dataSource = dataSource.cloneWithRows(this.getTasks(this.state.selectedType))
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
                  onPress={this.selectType.bind(this, 0)} 
                  isSelected={this.state.selectedType === 0} 
                  count={profile.acceptedTasks.length} 
                  type="Accepted" 
                />
                <TypeText 
                  onPress={this.selectType.bind(this, 1)} 
                  isSelected={this.state.selectedType === 1} 
                  count={profile.completedTasks.length} 
                  type="Completed" 
                />
                <TypeText 
                  onPress={this.selectType.bind(this, 2)} 
                  isSelected={this.state.selectedType === 2} 
                  count={profile.requests.length} 
                  type="Requests" 
                />
              </View>
            </View>
          </View>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
        >
        </ListView>
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
  myProfile : state.myProfile,
  users: state.users,
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(myProfileActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
