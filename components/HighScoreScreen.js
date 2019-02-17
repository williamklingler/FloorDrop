import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import Bar from './bar'
import CustomButton from './CustomButton';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {score1: 0, score2: 0, score3: 0}
      this._retrieveData();
  }
  updatePosition = (width, height, barX, barY, num) =>{}
  _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('0');
    if (value !== null) {
      this.setState({score1: value});
    }
   } catch (error) {
     // Error retrieving data
     alert('hello');
   }
   try {
     const value = await AsyncStorage.getItem('1');
     if (value !== null) {
       this.setState({score2: value});
     }
    } catch (error) {
      // Error retrieving data
    }
    try {
      const value = await AsyncStorage.getItem('2');
      if (value !== null) {
        this.setState({score3: value});
      }
     } catch (error) {
       // Error retrieving data
     }
}
  render() {
    var bars =[];
    for(var i = 0; i < 15; i++){
      bars.push(<View style={{ height: '3%', position: 'absolute', top: String(i * 7) + '%', zIndex: -1}} key = {i} ><Bar callback = {this.updatePosition} key = {i+100} num ={i}/> </View>);

    }
    return (
    <View style = {{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
    <View style = {styles.buttonBackground}>
    //this is where all the scores go
    <Text style = {styles.scoreText}> 1:             {this.state.score1} </Text>
    <Text style = {styles.scoreText}> 2:             {this.state.score2} </Text>
    <Text style = {styles.scoreText}> 3:             {this.state.score3} </Text>
    </View>
    <CustomButton callback = {this.props.callback} />
    {bars}
    </View>
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
      width: '80%',
      height: '30%',
      borderRadius: 10,
      marginBottom: '5%'

  },
  scoreText:{
    fontSize: '30%'
  },
});
