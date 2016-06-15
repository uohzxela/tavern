'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native';

import Button from 'react-native-button';
import ModalBox from './ModalBox';

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
    color: "#087EFF",
    textAlign: 'center'
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
  },
  modalTitle: {
    fontSize: 25,
  },
  modalDescription: {
    fontSize: 16
  },
  modalPhoto: {
    marginVertical: 10
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
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
    });
  }

  showModal(token) {
    this.setModalVisible(true);
    this.setState({
      modalVisible: true,
      achievement: this.props.achievements[token]
    })
  }
  render() {
    let achievementsInProgress, achievementsEarned;
    const currentUser = this.props.me;
    achievementsInProgress = currentUser.achievementsInProgress.map((token) => {
      const achievement = this.props.achievements[token];
      return (
        <TouchableHighlight 
          key={token} 
          onPress={this.showModal.bind(this, token)}
          underlayColor={'transparent'}
          >
          <View style={styles.cardContainer} >
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
        </TouchableHighlight>
      )
    });
    achievementsEarned = currentUser.achievementsEarned.map((token) => {
      const achievement = this.props.achievements[token];
      return (
        <TouchableHighlight 
          key={token}           
          onPress={this.showModal.bind(this, token)}
          underlayColor={'transparent'}
          >
          <View style={styles.cardContainer} >
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
        </TouchableHighlight>
      )
    });
    return(
      <View>
        <ModalBox 
          onClose={this.setModalVisible.bind(this, false)} 
          visible={this.state.modalVisible}
        >
          <Text style={styles.modalTitle}> 
            {this.state.achievement && this.state.achievement.name} 
          </Text>
          { this.state.achievement && this.state.achievement.photoUrl ?
            <Image 
              style={[styles.card, styles.modalPhoto]} 
              resizeMode={Image.resizeMode.cover} 
              source={{uri: this.state.achievement.photoUrl}} 
            />
            :
            <View style={[styles.card, styles.modalPhoto]}>
              <Text style={styles.count}>{this.state.achievement && this.state.achievement.count}</Text>
            </View>
          }
          <Text style={styles.modalDescription}> 
            {this.state.achievement && this.state.achievement.description} 
          </Text>
        </ModalBox>
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
  me: state.me,
  users : state.users,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Achievements);