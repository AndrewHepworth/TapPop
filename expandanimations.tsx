import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {View, Animated, Easing, ViewStyle, Text} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

// type ExpandingCircleProps = PropsWithChildren<{style: ViewStyle}>;
type ExpandingCircleProps = PropsWithChildren<{style: ViewStyle}>;

const ExpandingCircle: React.FC<ExpandingCircleProps> = props => {
  const scale = useRef(new Animated.Value(0)).current;

  const size = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80],
  });

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 2400,
      useNativeDriver: false,
    }).start();
  });

  return (
    <View
      style={{
        ...props.style,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          width: size,
          height: size,
          backgroundColor: 'blue',
          borderRadius: 50,
          transform: [{scale}],
        }}
      />
    </View>
  );
};

const ExpandingCircleWrapper = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ExpandingCircle
        style={{
          width: 250,
          height: 50,
          backgroundColor: 'powderblue',
        }}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
          Fading in
        </Text>
      </ExpandingCircle>
    </View>
  );
};

export default ExpandingCircleWrapper;
