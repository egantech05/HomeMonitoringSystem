import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomePlan from './assets/homePlan';
import ZoomableSVG from './utils/ZoomableSVG';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.plan}> 
        <ZoomableSVG>
          <HomePlan />
        </ZoomableSVG>
      </View>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1bff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  plan:{
    width: "100%",
    height: "100%",
    padding: 32,
    borderWidth:2,
    borderColor: "red",
  },
});
