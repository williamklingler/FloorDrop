import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import HighScoreScreen from './HighScoreScreen';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style ={{ width: '80%', height: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>
      <TouchableOpacity
      style = {styles.buttonBackground}
      blurRadius = {100}
      onPress={() => {
        this.props.callback(<HighScoreScreen callback = {this.props.callback}/>);
      }} >
      <Image style = {styles.playButton} source={require('../assets/leaderboard.png')} />
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
