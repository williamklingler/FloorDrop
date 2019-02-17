import React from 'react';
import {View, Dimensions} from 'react-native';
import Game from './components/Game';
import StartScreen from './components/startScreen';

Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {mode: <StartScreen callback = {this.switchScreens} />};
  }
  switchScreens = (mode) =>{
    this.setState((state) => ({ mode: mode}));
    }
  render() {
    return (
    <View style ={{ width: '100%', height: '100%'}}>
    {this.state.mode}
    </View>
    );
  }
}
