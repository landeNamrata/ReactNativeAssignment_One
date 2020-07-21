import React from 'react'
import { StyleSheet, TouchableOpacity, View, Button } from "react-native";
//import * as Icon from 'react-feather';

const ButtonComponent = ({ onPress , icon }) => {
    return (            
<TouchableOpacity onPress={onPress} style={styles.buttonContainer}>          
      <Button title={icon} name={icon} style={styles.buttonContainer}/>
         </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

 buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'20%'
    },
    buttonBorder: {
        borderColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        width: 70,
        height: 70,
        backgroundColor: 'grey'
        },
})
export default ButtonComponent;