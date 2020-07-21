import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList  ,Text} from "react-native";
import axios from 'axios';
import ShowUser from "../components/ShowUser";
import { Card } from "react-native-elements";

class UserListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }
  getUsersData() {
    axios.get("https://jsonplaceholder.typicode.com/users")
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
    // const 
    return (
      <View>
         <Text style={styles.heading}> User List</Text>
        <FlatList
          data={this.state.Users}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <Card style={styles.card}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('UserDetails', { _id: item.id })}
                >
                  <ShowUser
                    item={item}
                  />
                </TouchableOpacity>
              </Card>
            )
          }}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  heading: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:5,
    marginTop: 5,
  }
});

export default UserListScreen;
