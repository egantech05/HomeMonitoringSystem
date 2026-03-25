import React from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export default function ZomableSVG({
  children,
  width = 340,
  height = 240,
  minScale = 0.5,
  maxScale = 4,
  style,
}) {
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedX = useSharedValue(0);
  const savedY = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      savedX.value = translateX.value;
      savedY.value = translateY.value;
    })
    .onUpdate((e) => {
      translateX.value = savedX.value + e.translationX;
      translateY.value = savedY.value + e.translationY;
    });

  const pinch = Gesture.Pinch()
    .onBegin(() => {
      savedScale.value = scale.value;
    })
    .onUpdate((e) => {
      scale.value = clamp(savedScale.value * e.scale, minScale, maxScale);
    });

  const gesture = Gesture.Simultaneous(pan, pinch);

  const onWheel = (e) => {
    // React Native Web wheel event
    const delta = e.nativeEvent.deltaY;
    const zoomFactor = delta > 0 ? 0.9 : 1.1;
  
    const next = clamp(scale.value * zoomFactor, minScale, maxScale);
    scale.value = next;
  };
  

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],

    
  }));

  return (
    <GestureDetector gesture={gesture}>
            <Animated.View
        onWheel={onWheel}
        style={[{ width, height }, style, animatedStyle]}
        >
        {children}
        </Animated.View>
    </GestureDetector>
  );
}
