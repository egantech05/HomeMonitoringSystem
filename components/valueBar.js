import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function ValueBar (){

    const [now, setNow] = useState(new Date());

    useEffect(() => {
      const id = setInterval(() => setNow(new Date()), 1000);
      return () => clearInterval(id);
    }, []);

    const formatDateTime = (d) => {
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        const hours = String(d.getHours()).padStart(2, '0');
        const mins = String(d.getMinutes()).padStart(2, '0');
        const secs = String(d.getSeconds()).padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${mins}:${secs}`;
      };


return(
    <View style={styles.container}>
            <View style={styles.valueContainer}>
                <Ionicons name="partly-sunny-outline" size={16} color="hsl(0,0%,100%)" />    
                <Text style={styles.time}>{formatDateTime(now)}</Text>
            </View>
            <View style={styles.valueContainer}>
                <View style={styles.valueBox}>
                    <Ionicons name="thermometer-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> 15</Text>
                    <Text style={styles.unit}> °C</Text>
                </View>
                <View style={styles.valueBox}>
                    <Ionicons name="medical-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> 15</Text>
                    <Text style={styles.unit}> %</Text>
                          </View>
                          <View style={styles.valueBox}>
                    <Ionicons name="flash-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> 400</Text>
                    <Text style={styles.unit}> kWh</Text>
                </View>
                <View style={styles.valueBox}>
                    <Ionicons name="water-outline" size={16} color="hsl(0,0%,100%)" />
                    <Text style={styles.value}> 30</Text>
                    <Text style={styles.unit}> liter</Text>
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
    gap:16,
  },

  valueBox:{
    padding:16,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    
  },

  time:{
    color: "white",
  },

  value:{
    fontSize:32,
    color: "white",
  },

  unit:{
    color:"white",
  },

});