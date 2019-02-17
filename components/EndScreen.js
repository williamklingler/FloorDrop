import React from 'react';
import {View, Button, Text, AsyncStorage} from 'react-native';
import Game from './Game';
import CustomButton from './CustomButton';



export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {score1: '0', score2: '0', score3: '0'}
      this._retrieveData()
  }
  _retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('0');
    if (value !== null) {
      this.setState({score1: value});
    }
   } catch (error) {
     // Error retrieving data
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
_storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    // Error saving data
  }
}
  render() {
    if (this.props.score > Number(this.state.score1)){
      this._storeData('0', this.props.score.toString());
      this._storeData('1', this.state.score1);
      this._storeData('2', this.state.score2)
    }
    else if (this.props.score > Number(this.state.score2)){
    this._storeData('1', this.props.score.toString());
    this._storeData('2', this.state.score2);
  }
    else if (this.props.score > Number(this.state.score3))
    this._storeData('2', this.props.score.toString());
    return (
    <View style ={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Text style ={{fontSize: '60%'}} > {this.props.score} </Text>
      <CustomButton callback = {this.props.callback} />
    </View>
    );
  }
}
