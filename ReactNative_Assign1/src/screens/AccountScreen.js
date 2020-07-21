import React, { useContext } from 'react';
import { Text, StyleSheet  } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext"


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={styles.text}>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    text:{
      marginTop:50,
      alignSelf:'center',
      fontWeight:'bold',
      fontSize:20
  }
});


export default AccountScreen;
