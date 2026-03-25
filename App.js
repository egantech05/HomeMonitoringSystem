import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useMemo, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomePlan from './assets/homePlan';
import ZoomableSVG from './utils/ZoomableSVG';
import ValueBar from './components/valueBar';
import rooms from './data/dummydata';



export default function App() {


  const [activeRoomId, setActiveRoomId] = useState(null);

  const summary = useMemo(() => {
    const totals = rooms.reduce(
      (acc, room) => {
        acc.temp += room.temperature;
        acc.humidity += room.humidity;
        acc.power += room.powerConsumption;
        acc.water += typeof room.waterConsumption === 'number' ? room.waterConsumption : 0;
        return acc;
      },
      { temp: 0, humidity: 0, power: 0, water: 0 }
    );

    const count = rooms.length || 1;
    return {
      temperature: Number((totals.temp / count).toFixed(0)),
      humidity: Number((totals.humidity / count).toFixed(0)),
      powerConsumption: Number(totals.power.toFixed(0)),
      waterConsumption: Number(totals.water.toFixed(0)),
    };
  }, []);

  const activeRoom = rooms.find((room) => room.id === activeRoomId);
  const display = activeRoom || summary;
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.safe} edges={['top', 'left', 'right', 'bottom']}>
        <GestureHandlerRootView style={styles.container}>
            <StatusBar
            backgroundColor="transparent"
            translucent={true}
          />
          <ValueBar
            temperature={display.temperature}
            humidity={display.humidity}
            powerConsumption={display.powerConsumption}
            waterConsumption={display.waterConsumption}
          />
          <View style={styles.plan}>
            <ZoomableSVG>
              <HomePlan onRoomHover={setActiveRoomId} activeRoomId={activeRoomId} />
            </ZoomableSVG>
          </View>
          <View>
            <Text style={styles.brand}> by EGANTECH</Text>
          </View>
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}


const styles = StyleSheet.create({
  safe: {
    flex:1,
    backgroundColor: '#1b1b1bff',
    padding: 8,
    
  },
  container: {
    alignItems: 'center',
    flex:1,
    justifyContent:"space-between"
  },

  plan:{
    width: "100%",
    height:"65%",
    overflow:"hidden"
  },

  brand:{
    color: "white",

  },


});
