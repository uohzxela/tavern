/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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

// import Header from './Header';
// import Options from './Options';

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
    height: 20
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

const shiraPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/1977107_10152627757458362_977960513_n.jpg?oh=186a0a878ee9c605a97959433d3cc66f&oe=5807910B";
const alexPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c0.53.320.320/p320x320/422175_10151344829720287_81819786_n.jpg?oh=a9435a6f0deb9e65e8769ae430e1ca47&oe=57CFDA18";
const kelvinPhoto = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p320x320/11140073_10153842338282729_8305250301472142611_n.jpg?oh=83034e7868ffa584bf112a3607a1cf74&oe=57C1575B";
const random1 = "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c66.66.828.828/s320x320/11170362_10206552081865969_3086531596201734129_n.jpg?oh=7874d119a074cddadcc0e41e99cf2cfc&oe=580797AD"

let posts = [
  {
    id: 0, 
    photoUrl: shiraPhoto, 
    name: "Shira", 
    status: 'has just completed the "Recycle 20 bottles in 1 week" challenge!',
    bio: "An altruistic guy",
    message: "Keytar seitan affogato paleo. Mustache kinfolk pinterest try-hard lo-fi actually. Tumblr letterpress portland, williamsburg godard biodiesel stumptown schlitz tilde bespoke gochujang crucifix lumbersexual DIY farm-to-table.", 
    favorited: false, 
    added: false, 
    time: "1 min"
  },
  {
    id: 1, 
    photoUrl: random1, 
    name: "Kelvin", 
    status: 'finished his first volunteer trip to an animal shelter!',
    bio: "An altruistic guy",
    message: "Cliche lo-fi yr taxidermy biodiesel chia. Squid salvia bushwick portland, retro austin four dollar toast post-ironic meggings chillwave stumptown.", 
    favorited: false, 
    added: false, 
    time: "10 min"
  },
  {
    id: 2, 
    photoUrl: alexPhoto, 
    name: "Alex", 
    status: 'earned the title: Cookie Man by giving out 20 cookies!',
    bio: "An altruistic guy",
    message: "Art party cornhole four loko, artisan synth try-hard raw denim. Mlkshk quinoa venmo, leggings yuccie marfa gochujang tilde chicharrones messenger bag. ", 
    favorited: false, 
    added: false, 
    time: "21 hrs"
  },
]

export default class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts
    }
  }

  renderRow(rowData, sectionID, rowID) {
    const photoUrl = rowData.photoUrl;
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
              <Text style={styles.time}>{rowData.time} </Text>
            </View>
          </View>
          <View >
            <Text style={styles.message}>{rowData.message} </Text>
          </View>
          <View style={styles.rowFooter}>
            <TouchableHighlight 
              underlayColor="transparent"  
              onPress={this.favoriteAction.bind(this, rowID)}
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
              onPress={this.addAction.bind(this, rowID)}
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

  favoriteAction(rowId) {
    this.state.posts[rowId].favorited = !this.state.posts[rowId].favorited;
    this.setState({
      posts: this.state.posts
    })
  }

  addAction(rowId) {
    this.state.posts[rowId].added = !this.state.posts[rowId].added;
    this.setState({
      posts: this.state.posts
    })
  }

  render() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    dataSource = dataSource.cloneWithRows(this.state.posts)
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
