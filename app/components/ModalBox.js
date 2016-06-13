'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  Modal
} from 'react-native';

import Button from 'react-native-button';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: '#fff', 
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    marginTop: 10,
  },
});

export default class ModalBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.onClose}
        >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            {this.props.children}
            <Button
              onPress={this.props.onClose}
              style={styles.modalButton}>
              Close
            </Button>
          </View>
        </View>
      </Modal>
    )
  }
}