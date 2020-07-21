import React from 'react'
import { Text, StyleSheet ,View } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
    return <MapView />
}

const styles = StyleSheet.create({
    text: {
      marginTop: 50,
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 20
    }
  
  });

export default  Map;