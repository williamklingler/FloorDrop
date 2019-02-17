import React from 'react';
import { StyleSheet, Text, View, Dimensions, PanResponder, Animated, Easing } from 'react-native';
import Bar from './bar';
import EndScreen from './EndScreen';
import { Constants, DangerZone, Audio } from 'expo';
import Expo from 'expo';

var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;
Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);
var circxoffset = 0;
const numOfBars = 20;
var initialPositionArray = [];
const circWAndH = h/20;
const circBorderRadius = h/40;
var oldBarX = 0;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { startingPoint: Math.floor(h/100 * 20)*-1, addedMargin: new Animated.Value(h/h), animationDuration: 775 * numOfBars, circleXOffset: w/1.9, circleYOffset: h-120, motionData: [], score: 0, levelUpSound: new Expo.Audio.Sound(), dieSound: new Expo.Audio.Sound()};
    this._panResponder = PanResponder.create({
        // Ask to be the responder:
        onMoveShouldSetPanResponder: (evt, gestureState) => true,

        onPanResponderMove: (evt, gestureState) => {
          //this.setState((state) => ({ circleXOffset: gestureState.moveX}));
          circxoffset = gestureState.moveX - 20;
        }
      });
      for (var i =0; i<numOfBars; i++){
        initialPositionArray.push(this.state.startingPoint * (i +1));
      }
  }
  async componentWillMount(){
    await this.state.levelUpSound.loadAsync(require('../assets/levelUp.wav'));
    await this.state.dieSound.loadAsync(require('../assets/die.mp3'));
    await this.state.pressPlaySound.loadAsync(require('../assets/pressPlay.wav'));
    try {
  Audio.setAudioModeAsync({
    playsIplaysInSilentModeIOS: true,
  });
}
catch (error) {
    //
   }
  }
componentDidMount() {
    this._interval = setInterval(() => {
      this.setState((state) => ({ circleXOffset: circxoffset}));
    }, 17)
    this.startAnimation();
    //this.toggleSubscription();  ** for device motion api

}
componentWillUnmount(){
  clearInterval(this._interval);
  //this.unsubscribe();  ** for device motion api
}
playSound = async(type) => {
  if (type == 'levelUp'){
    try {
        await this.state.levelUpSound.setPositionAsync(0);
      await this.state.levelUpSound.playAsync(); //This works, but just only once!
    }
    catch (error) {

    }
  }
  if (type == 'die'){
    try {
        await this.state.dieSound.setPositionAsync(0);
      await this.state.dieSound.playAsync(); //This works, but just only once!
    }
    catch (error) {

    }

  }
  }/*toggleSubscription = () => {
    if (this.subscription) {
      this.unsubscribe();
    } else {
      this.subscribe();
    }
  }
subscribe = () => {
    this.subscription = DeviceMotion.addListener(motionData => {
      this.setState({ motionData });
    });
  }

unsubscribe = () => {
    this.subscription && this.subscription.remove();
    this.subscription = null;
  }*/

  startAnimation= () =>{
    Animated.timing(
      // Uses easing functions this.state.addedMargin + this.state.speed
      this.state.addedMargin, // The value to drive
      {toValue:  h/100*20*numOfBars + h, duration: this.state.animationDuration, easing: Easing.linear} // Configuration
    ).start(); // Don't forget start!
  }
  updatePosition = (width, height, barX, barY, num) =>{
    if (num == numOfBars -1 && barY > h){
      //all the bars have gone under the screen. Now we must reset them.
      this.state.addedMargin.setValue(0);
      this.setState((state) => ({ animationDuration: state.animationDuration * 0.935}));
      this.startAnimation();
      this.setState((state) => ({ score: state.score + 1}));
      this.playSound('levelUp');
    }
    else if( (barY+height) >= (this.state.circleYOffset) && (barY+height) <= (this.state.circleYOffset + circWAndH) ){
      if( (this.state.circleXOffset) < (barX) || (barX+width) < (this.state.circleXOffset + h/20)){
        //The circle and a bar have touched... they have collided... game over
        this.props.callback(<EndScreen callback = {this.props.callback} score = {this.state.score}/>);
        this.playSound('die');
      }
      else if ((this.state.circleXOffset) > (barX) && (barX+width) > (this.state.circleXOffset + h/20) && barX != oldBarX){

      }
    }
    if (barX != oldBarX){
      oldBarX = barX;
    }
  } //this.state.startingPoint * (i +1) + this.state.addedMargin
  render() {
    var bars =[];
    for(var i = 0; i < numOfBars; i++){
      bars.push(<Animated.View style={{ height: '3%', position: 'absolute', top: this.state.addedMargin.__getValue() + initialPositionArray[i]}} key = {i} ><Bar callback = {this.updatePosition} key = {i} num ={i}/> </Animated.View>);
      //console.log(this.state.marginTop * (i+1));
    }
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
      <Text style = {{position: 'absolute', zIndex: 5, color: 'black', top: '10%', fontSize: 40}}> {this.state.score} </Text>
        {bars}
        <View style ={{width: circWAndH, height: circWAndH, backgroundColor: 'black', borderRadius: circBorderRadius, position: 'absolute', top: this.state.circleYOffset, left: this.state.circleXOffset}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
  },
});
