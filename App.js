import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomePlan from './assets/homePlan';
import ZoomableSVG from './utils/ZoomableSVG';
import ValueBar from './components/valueBar';

export default function App() {
  return (

    <GestureHandlerRootView style={styles.container}>
      <ValueBar/>
      <View style={styles.plan}> 
        <ZoomableSVG>
          <HomePlan />
        </ZoomableSVG>
      </View>
      <View>
        <Text style={styles.brand}> by EGANTECH</Text>
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
    padding: 24,

  },

  plan:{
    width: "100%",
    height: "80%",
    padding: 40,
    overflow:"hidden"
  },

  brand:{
    color: "white",
  },


});
