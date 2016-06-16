import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableHighlight,
    ScrollView,
    Dimensions,
    Image
} from 'react-native'

import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'
import ModalBox from './ModalBox';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const IMAGE_MARGIN = 20;
const IMAGE_WIDTH = (Dimensions.get('window').width)/2 - IMAGE_MARGIN * 2 ;

const ORGS = ["org0", "org1", "org2", "org3", "org4", "org5"]

export default class Volunteer extends React.Component {
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
          org: this.props.organizations[token]
        })
    }
    render(){
        const organizations = ORGS.map((token) => {
            const org = this.props.organizations[token];
            return (
                <TouchableHighlight 
                    key={token} 
                    style={{margin: IMAGE_MARGIN}} 
                    onPress={this.showModal.bind(this, token)}
                    underlayColor={'transparent'}
                    >
                    <View>
                        <Image 
                            style={{width: IMAGE_WIDTH, height: IMAGE_WIDTH}}
                            resizeMode={Image.resizeMode.cover} 
                            source={{uri: org.photoUrl}} 
                        />
                        <Text style={styles.orgName}>{org.name}</Text>
                    </View>
                </TouchableHighlight>  
            )
        })
        return (
            <View style={styles.container}>
                <ModalBox 
                  onClose={this.setModalVisible.bind(this, false)} 
                  visible={this.state.modalVisible}
                >
                  <Text style={styles.modalTitle}> 
                    {this.state.org && this.state.org.name} 
                  </Text>
                  { this.state.org && this.state.org.photoUrl &&
                    <Image 
                      style={[styles.image, styles.modalPhoto]} 
                      resizeMode={Image.resizeMode.cover} 
                      source={{uri: this.state.org.photoUrl}} 
                    />
                  }
                  <Text style={styles.modalDescription}> 
                    {this.state.org && this.state.org.description} 
                  </Text>
                  <Button containerStyle={styles.applyButton} style={{color: "white"}}>
                    Apply to Volunteer
                  </Button>
                </ModalBox>
                <ScrollView>
                    <Text style={{fontSize: 25, marginLeft: 20, marginTop: 20}}>Recommended for you</Text>
                    <View style={styles.scrollContainer}>
                        {organizations}                
                    </View>
                </ScrollView>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 60
    },
    image: {
        width: IMAGE_WIDTH, 
        height: IMAGE_WIDTH,
        backgroundColor: 'pink'
    },
    scrollContainer: {
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        flex: 1, 
        marginBottom: 50
    },
    orgName: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10
    },
    modalTitle: {
        fontSize: 25,
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 10
    },
    modalPhoto: {
        marginVertical: 10
    },
    applyButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#4A90E2',
        borderRadius: 10
    }
});

const mapStateToProps = (state) => ({
    organizations: state.organizations
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Volunteer);