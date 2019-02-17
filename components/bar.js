import React from 'react';
import {View, Dimensions} from 'react-native';

var w = Dimensions.get('window').width;
var h = Dimensions.get('window').height;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {holeLocation: Math.floor(Math.random() * (78 - 0 + 1)) + 0 , holeLength: Math.floor(Math.random() * (28 - 15 + 1)) + 15};
    self = this;
  }
  componentDidMount(){
    this._interval = setInterval(() => {
              this.myComponent.measure( (fx, fy, width, height, px, py) => {
              this.props.callback(width, height, px, py, this.props.num);
          })
    }, 60)
  }
  componentWillUnmount(){
    clearInterval(this._interval);
  }
  /*componentDidUpdate(){
    this.myComponent.measure( (fx, fy, width, height, px, py) => {
            this.props.callback(width, height, px, py, this.props.num);
        })
  }*/
  render() {
    return (
    <View style = {{flexDirection: 'row', justifyContent: 'flex-start', height: '100%'}}>
    <View style = {{height: '100%', width: String(this.state.holeLocation) +'%', backgroundColor: 'blue'}} > </View>
    <View style = {{height: '100%', width: String(this.state.holeLength) +'%'}} ref={view => { this.myComponent = view; }} />
    <View style = {{height: '100%', width: String((100-(this.state.holeLocation + this.state.holeLength))) +'%', backgroundColor: 'blue'}} />
    </View>
    );
  }
}
