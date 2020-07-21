import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import axios from 'axios'
import { Card } from "react-native-elements"

class UserDetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }
  getUsersData() {
    const _id = this.props.navigation.getParam('_id')
    axios.get(`https://jsonplaceholder.typicode.com/users/${_id}`)
      .then(res => {
        // console.log(res.data)
        const data = res.data;
        this.setState({ Users: data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  componentDidMount() {
    this.getUsersData()
  }

  render() {
    return (
      <Card>
        <Text style={styles.heading}>Selected User Details</Text>
        <View>
          <View style={styles.viewTyle}>
            <View style={styles.ViewName}>
              <Text style={{ fontWeight: 'bold' }}>User Name</Text>
              <Text style={{ marginLeft: 35, fontWeight: 'bold' }}>{this.state.Users.username}</Text>
            </View>

            <View style={styles.ViewName}>
              <Text style={{ fontWeight: 'bold' }}> Name</Text>
              <Text style={{ marginLeft: 65 }}>{this.state.Users.name}</Text>
            </View>

            <View style={styles.ViewName}>
              <Text style={{ fontWeight: 'bold' }}>Phone Number</Text>
              <Text style={{ marginLeft: 10 }}>{this.state.Users.phone}</Text>
            </View>
            <View style={styles.ViewName}>
              <Text style={{ fontWeight: 'bold' }}>Email </Text>
              <Text style={{ marginLeft: 66 }}>{this.state.Users.email}</Text>
            </View>
            <View style={styles.website}>
              <Text style={{ fontWeight: 'bold' }}>Website </Text>
              <Text style={{ marginLeft: 5, color: 'blue' }}>{this.state.Users.website}</Text>
            </View>
          </View>
        </View>
      </Card>

    )
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  viewTyle: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
  ViewName: {
    flexDirection: 'row',
    fontSize: 20
  },
  website: {
    flexDirection: 'row',
    fontSize: 20,
    alignSelf: 'flex-end',
    marginTop: 20
  },
  heading: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 5,

  }
});

export default UserDetailScreen;
