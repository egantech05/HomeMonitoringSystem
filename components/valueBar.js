import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { formatDateTime } from '../utils/dateTime';

export default function ValueBar ({
    temperature,
    humidity,
    powerConsumption,
    waterConsumption,
  }) {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
      const id = setInterval(() => setNow(new Date()), 1000);
      return () => clearInterval(id);
    }, []);


      const formatNumber = (value) => {
        if (typeof value !== 'number') return value;
        const rounded = Math.round(value * 10) / 10;
        return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
      };
    
      const renderValue = (value, unit) => {
        const isNumber = typeof value === 'number';
        return (
          <>
            <Text style={styles.value}>{isNumber ? formatNumber(value) : value}</Text>
            {isNumber && <Text style={styles.unit}> {unit}</Text>}
          </>
        );
      };


return(
    <View style={styles.container}>
            <View style={styles.valueContainer}>
                <Ionicons name="partly-sunny-outline" size={16} color="hsl(236,33%,60%)" />    
                <Text style={styles.time}>{formatDateTime(now)}</Text>
            </View>
            <View style={styles.valueContainer}>
                <View style={styles.valueBox}>
                    <Ionicons name="thermometer-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> {temperature}</Text>
                    <Text style={styles.unit}> °C</Text>
                </View>
                <View style={styles.valueBox}>
                    <Ionicons name="water-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> {humidity}</Text>
                    <Text style={styles.unit}> %</Text>
                </View>
                <View style={styles.valueBox}>
                    <Ionicons name="flash-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> {powerConsumption}</Text>
                    <Text style={styles.unit}> kWh</Text>
                </View>
                <View style={styles.valueBox}>
                    <Ionicons name="water-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> {waterConsumption}</Text>
                    <Text style={styles.unit}>liter</Text>
                </View>
            </View>


    </View>

)}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "hsl(0,0%,15%)",
    margin: 24,
    padding:24,
    borderRadius: 24,
  },



  title:{
    padding:16,
    fontWeight: "900",
    color: "white",
  },

  valueContainer:{
    flexDirection:"row",
    gap:24,
  },

  valueBox:{
    padding:16,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    gap:8,
    
  },

  time:{
    color: "hsl(236,33%,60%)",
  },

  value:{
    fontSize:32,
    color: "hsl(236,33%,50%)",
  },

  unit:{
    color:"white",
  },

});