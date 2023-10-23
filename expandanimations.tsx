import React from 'react';
import {View, Animated, Easing} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

export default class ExpandingCircle extends React.Component {
  scale: Animated.Value;

  constructor(props: {}) {
    super(props);
    this.scale = new Animated.Value(1);
  }

  handleGestureStateChange = (event: {nativeEvent: {state: State}}) => {
    if (event.nativeEvent.state === State.END) {
      Animated.timing(this.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.elastic(2),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(this.scale, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    const {scale} = this;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <PanGestureHandler onHandlerStateChange={this.handleGestureStateChange}>
          <Animated.View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'blue',
              borderRadius: 50,
              transform: [{scale}],
            }}
          />
        </PanGestureHandler>
      </View>
    );
  }
}