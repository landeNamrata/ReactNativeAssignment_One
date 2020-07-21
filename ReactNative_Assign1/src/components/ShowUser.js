import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ShowUser = ({ item }) => {

  return (
<View>
      <View style={styles.viewTyle}>
      <View style={styles.ViewName}>
        <Text style={{ fontWeight: 'bold' }}>User Name</Text>
        <Text style={{ marginLeft: 35, fontWeight: 'bold' }}>{item.username}</Text>
      </View>

      <View style={styles.ViewName}>
        <Text style={{ fontWeight: 'bold' }}> Name</Text>
        <Text style={{ marginLeft: 65 }}>{item.name}</Text>
      </View>

      <View style={styles.ViewName}>
        <Text style={{ fontWeight: 'bold' }}>Phone Number</Text>
        <Text style={{ marginLeft: 10 }}>{item.phone}</Text>
      </View>
      <Text style={styles.readMoreStyle}>
        Read More...
      </Text>
    </View>
   </View>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  result: {
    alignSelf: 'flex-end',
    marginRight: 7,
    marginBottom: 5
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'space-between'
  },
  viewTyle: {
    flex: 1,
    display: 'flex',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  ViewName: {
    flexDirection: 'row'
  },
  readMoreStyle: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 1,
    marginTop:2
  }
});

export default ShowUser;