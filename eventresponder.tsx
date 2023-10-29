import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {
  View,
  Animated,
  ViewStyle,
  Text,
  PanResponder,
  StyleSheet,
} from 'react-native';

type EventResponderProps = PropsWithChildren<{style: ViewStyle}>;

const EventResponder: React.FC<EventResponderProps> = props => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start(({finished}) => {
          console.log(`finished moving object ${finished}`);
        });
      },
    }),
  ).current;

  pan.addListener(({x, y}) => {
    console.log(`Moving object ${x}, ${y}`);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag & Release this box!</Text>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

const EventResponderWrapper = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <EventResponder
        style={{
          width: 250,
          height: 250,
          backgroundColor: 'powderblue',
        }}></EventResponder>
    </View>
  );
};

export default EventResponderWrapper;
