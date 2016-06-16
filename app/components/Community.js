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
    paddingBottom: 30
  },
  rowFooter: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 20,
    paddingBottom: 10,

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
  favIcon: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  addIcon: {
    width: 15,
    height: 15,
  },
  actionIconContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    flexDirection:'row', 
    justifyContent: 'center',
    alignItems: 'center', 
    // backgroundColor: 'pink',
    padding: 10,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
  },
  favCount: {
    fontSize: 14,
    marginTop: 1
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
            <FavIcon />
            <TouchableHighlight 
              underlayColor="transparent"  
              onPress={this.props.actions.toggleAdd.bind(this, rowID)}
              style={styles.actionIconContainer}
            >
              <Image 
                source={
                  !rowData.added ? 
                  require('../../assets/images/add.png') : 
                  require('../../assets/images/tick.png')
                }
                resizeMode={Image.resizeMode.contain} 
                style={styles.addIcon}
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

class FavIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Math.floor(Math.random() * 100),
      favorited: false
    }
  }

  toggleFavorite() {
    const newState = !this.state.favorited;
    this.setState({
      favorited: newState,
      count: this.state.count + (newState ? 1 : -1)
    });
  }
  render() {

    return(
      <TouchableHighlight 
        underlayColor="transparent"  
        onPress={this.toggleFavorite.bind(this)}
      >
        <View style={styles.actionIconContainer}>
          <Image 
            source={
              !this.state.favorited ? 
              require('../../assets/images/favorite.png') : 
              require('../../assets/images/favorited.png')
            }
            resizeMode={Image.resizeMode.contain} 
            style={styles.favIcon}
          />
          <Text 
            style={[styles.favCount, {color: this.state.favorited ? "black" : "#999"}]}
            >
            {this.state.count}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}
