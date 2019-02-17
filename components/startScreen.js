import React from 'react';
import {View, Button, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Game from './Game';
import CustomButton from './CustomButton';
import Bar from './bar';
import HighScoreButton from './HighScoreButton';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  updatePosition = (width, height, barX, barY, num) =>{}
  render() {
    var bars =[];
    for(var i = 0; i < 15; i++){
      bars.push(<View style={{ height: '3%', position: 'absolute', top: String(i * 7) + '%', zIndex: -1}} key = {i} ><Bar callback = {this.updatePosition} key = {i+100} num ={i}/> </View>);

    }
    return (
    <View style ={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <Text> High Score Holder: Kosta Gianicos - Level 10. "buss down thotiana" </Text>
    <CustomButton callback = {this.props.callback}/>
    <HighScoreButton callback = {this.props.callback}  />
    {bars}
    </View>
    );
  }
}
