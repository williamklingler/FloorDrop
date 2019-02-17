import React from 'react';
import {View, Button, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Game from './Game';
import Expo from 'expo';


export default class App extends React.Component {
  constructor(props){
    super(props);
  this.state = { pressPlaySound: new Expo.Audio.Sound()  }
  }
  async componentWillMount(){
    await this.state.pressPlaySound.loadAsync(require('../assets/pressPlay.wav'));
  }
  playSound = async(type) => {
      try {
        await this.state.pressPlaySound.setPositionAsync(0);
        await this.state.pressPlaySound.playAsync(); //This works, but just only once!
      }
      catch (error) {
      }
    }
  render() {
    return (
    <View style ={{ width: '80%', height: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity
    style = {styles.buttonBackground}
    blurRadius = {100}
    onPress={() => {
      this.playSound();
      this.props.callback(<Game callback = {this.props.callback}/>);
    }} >
    <Image style = {styles.playButton} source={require('../assets/play.png')} />
  </TouchableOpacity>
  </ View>
    );
  }
}
const styles = StyleSheet.create({
    buttonBackground: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: '20%',
      backgroundColor: '#FCa8cFbf',
      width: '100%',
      height: '100%',
      borderRadius: 10,

  },
  playButton:{
    width: '90%',
    height: '90%'
  },
});
