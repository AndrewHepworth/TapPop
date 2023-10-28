import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {View, Animated, Easing, ViewStyle} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

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
      // easing: Easing.elastic(2),
      useNativeDriver: false,
    }).start();
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

export default ExpandingCircle;

// export default class ExpandingCircle extends React.Component {
//   scale: Animated.Value;

//   constructor(props: {}) {
//     super(props);
//     this.scale = new Animated.Value(1);
//   }

//   handleGestureStateChange = (event: {nativeEvent: {state: State}}) => {
//     if (event.nativeEvent.state === State.END) {
//       Animated.timing(this.scale, {
//         toValue: 1,
//         duration: 300,
//         easing: Easing.elastic(2),
//         useNativeDriver: false,
//       }).start();
//     } else {
//       Animated.timing(this.scale, {
//         toValue: 2,
//         duration: 300,
//         useNativeDriver: false,
//       }).start();
//     }
//   };

//   render() {
//     const {scale} = this;
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <PanGestureHandler onHandlerStateChange={this.handleGestureStateChange}>
//           <Animated.View
//             style={{
//               width: 100,
//               height: 100,
//               backgroundColor: 'blue',
//               borderRadius: 50,
//               transform: [{scale}],
//             }}
//           />
//         </PanGestureHandler>
//       </View>
//     );
//   }
// }
