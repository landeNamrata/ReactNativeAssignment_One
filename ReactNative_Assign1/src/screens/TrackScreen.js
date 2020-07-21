import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";
import { requestPermissionAsync, watchPositionAsync, Accuracy } from "expo-location";
import '../_mockLocation';

const TrackScreen = () => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        console.log(location);
      });
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={{ fontSize: 30, alignSelf: 'center' ,marginTop:20 }}>Create a Track</Text>
      <Map />
      {err ? <Text style={{ marginTop: '60%', padding: 20 }}>Please enable location services</Text> : null}
      <Input
        style={{ borderWidth: 1, padding: 20 }}
        placeholder="Name of Track "
      />
      <Button
        style={{ padding: 20 }}
        title="Record Track"
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },

});

export default TrackScreen;
