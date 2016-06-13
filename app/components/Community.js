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
  Image,
} from 'react-native';

import { bindActionCreators } from 'redux';
import * as communityActions from '../actions/communityActions';
import { connect } from 'react-redux';

import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'

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
  }
});

export default class Community extends Component {
  constructor(props) {
    super(props);
  }

  renderRow(rowData, sectionID, rowID) {
    const user = this.props.users[rowData.userToken];
    return (

        <View style={styles.rowContainer}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={Actions.otherProfile.bind(this, {userToken: rowData.userToken})}
            >
              <Image 
                resizeMode={Image.resizeMode.contain} 
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
                  <Text style={styles.userStatus}> {rowData.status}</Text>
                </Text>
              </TouchableHighlight>
              <Text style={styles.time}>{rowData.time} </Text>
            </View>
          </View>
          <View >
            <Text style={styles.message}>{rowData.message} </Text>
          </View>
          <View style={styles.rowFooter}>
            <TouchableHighlight 
              underlayColor="transparent"  
              onPress={this.props.actions.toggleFavorite.bind(this, rowID)}
              style={styles.actionIcon}
            >
              <Image 
                source={
                  !rowData.favorited ? 
                  require('../../assets/images/favorite.png') : 
                  require('../../assets/images/favorited.png')
                }
              />
            </TouchableHighlight>
            <TouchableHighlight 
              underlayColor="transparent"  
              onPress={this.props.actions.toggleAdd.bind(this, rowID)}
              style={styles.actionIcon}
            >
              <Image 
                source={
                  !rowData.added ? 
                  require('../../assets/images/add.png') : 
                  require('../../assets/images/tick.png')
                }
              />
            </TouchableHighlight>
          </View>
        </View>


    )
  }

  render() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    dataSource = dataSource.cloneWithRows(this.props.posts)
    return (
      <View style={styles.container}>
        <View style={{paddingHorizontal: 10, marginTop: 30}}>
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

const mapStateToProps = (state) => ({
  posts : state.community.posts,
  users : state.users,
})

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(communityActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Community);
