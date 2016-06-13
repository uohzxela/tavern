'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const CARD_MARGIN = 10;
const CARD_WIDTH = Dimensions.get('window').height / 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: 'white',
  },
  cardContainer: {
    flex: 1,
    // backgroundColor: '#087EFF',
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: CARD_WIDTH - CARD_MARGIN * 3,
    height: CARD_WIDTH - CARD_MARGIN * 3,
    padding: CARD_MARGIN,
    backgroundColor: '#087EFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  count: {
    color: 'white',
    fontSize: 50
  },
  cardText: {
    fontSize: 18,
    color: "#087EFF"
  },
  scrollContainer: {
    flex: 1,
    // paddingLeft: 10
    // backgroundColor: 'pink'
  },
  achievementText: {
    paddingHorizontal: 20, 
    fontSize: 25, 
    marginBottom: 10,
    color: "#087EFF"
  }
});

export default class Achievements extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 20}}>
          <Text style={{textAlign:'center', fontSize: 25, color: '#087EFF'}}> Total tasks completed: </Text>
          <Text style={{textAlign:'center', fontSize: 35, color: "#087EFF"}}> 50 </Text>
        </View>
        <AchievementScrollViews {...this.props} />
      </View>
    )
  }
}

export class AchievementScrollViews extends Component {

  render() {
    let achievementsInProgress, achievementsEarned;
    const currentUser = this.props.myProfile;
    achievementsInProgress = currentUser.achievementsInProgress.map((token) => {
      const achievement = this.props.achievements[token];
      return (
        <View key={token} style={styles.cardContainer}>
          { achievement.photoUrl ?
            <Image 
              style={styles.card} 
              resizeMode={Image.resizeMode.cover} 
              source={{uri: achievement.photoUrl}} 
            />
            :
            <View style={styles.card}>
              <Text style={styles.count}>{achievement.count}</Text>
            </View>
          }
          <Text style={styles.cardText}>{achievement.name}</Text>
        </View>
      )
    });
    achievementsEarned = currentUser.achievementsEarned.map((token) => {
      const achievement = this.props.achievements[token];
      return (
        <View key={token} style={styles.cardContainer}>
          { achievement.photoUrl ?
            <Image 
              style={styles.card} 
              resizeMode={Image.resizeMode.cover} 
              source={{uri: achievement.photoUrl}} 
            />
            :
            <View style={styles.card}>
              <Text style={styles.count}>{achievement.count}</Text>
            </View>
          }
          <Text style={styles.cardText}>{achievement.name}</Text>
        </View>
      )
    });
    return(
      <View>
        <View style={{paddingTop: 20}}>
          <Text style={styles.achievementText}>Achievements In Progress </Text>
          <ScrollView
            style={styles.scrollContainer}
            horizontal={true}
          >
            {achievementsInProgress}
          </ScrollView>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={styles.achievementText}>Achievements Earned </Text>
          <ScrollView
            style={styles.scrollContainer}
            horizontal={true}
          >
            {achievementsEarned}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  achievements: state.achievements,
  myProfile: state.myProfile,
  users : state.users,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);