'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {Actions} from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: 'white',
    paddingBottom: 50
  },
  listHeader: {
    borderBottomColor: "#087EFF", 
    borderBottomWidth: 1, 
    // backgroundColor: 'pink', 
    marginTop: 20
  },
  listHeaderText: {
    color: '#087EFF',
    fontSize: 20,
    paddingLeft: 20
  },
  rowContainer: {
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,

  },
  rowFooter: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 20,
    marginBottom: -5
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
  },
  time: {
    color: "gray",
    textAlign: 'left'
  },
  message: {
    textAlign: "left",
    fontSize: 16
  },
});

export default class FindCompanions extends Component {
  constructor() {
    super()
    this.state = {
      isOn: false
    }
  }
  renderRow(rowData, sectionID, rowID) {
    const user = this.props.users[rowData.token];
    return (

        <View style={styles.rowContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={Actions.otherProfile_Task.bind(this, {userToken: user.token})}
            >
              <Image 
                resizeMode={Image.resizeMode.cover} 
                style={styles.userPhoto} 
                source={{uri: user.photoUrl}} 
              />
            </TouchableHighlight>
         
            <View style={styles.userInfo}>
              <TouchableHighlight
                underlayColor="transparent"
              >
                <Text style={styles.userName}> 
                  {user.name} 
                  <Text style={styles.userStatus}>, {user.bio}</Text>
                </Text>
              </TouchableHighlight>
              <Text style={styles.time}>
                {user.completedTasks.length} completed tasks, {user.achievementsEarned.length} achievements
              </Text>
            </View>
            <View style={{alignSelf: 'center', alignItems: 'center', marginLeft: 10}}>
              <AddIcon />
            </View>
          </View>
        </View>


    )
  }

  render() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    dataSource = dataSource.cloneWithRows(this.props.users)
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', padding: 20}}>
          <View style={{marginRight: 10}}>
            <Text style={{fontSize: 17, color: "#087EFF"}}>Share and find companions in community</Text>
            <Text>Make the task open to the community </Text>
          </View>
          <View>
            <Switch
              value={this.state.isOn}
              onValueChange={(value) => this.setState({isOn: value})}
            />
          </View>
        </View>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>Friends List</Text>
        </View>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow.bind(this)}
        >
        </ListView>
      </View>
    )
  }
}

class AddIcon extends Component {
  constructor() {
    super();
    this.state = { added: false };
  }
  render() {
    return(
      <TouchableHighlight 
        underlayColor="transparent"  
        onPress={()=>this.setState({added:!this.state.added})}
        style={styles.actionIcon}
      >
        <Image 
          source={
            !this.state.added ? 
            require('../../assets/images/add.png') : 
            require('../../assets/images/tick.png')
          }
        />
      </TouchableHighlight>
    )
  }
}

const mapStateToProps = (state) => ({
  users : state.users,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(FindCompanions);