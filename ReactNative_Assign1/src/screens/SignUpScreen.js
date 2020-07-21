import React,{useState , useContext} from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext } from "../context/AuthContext";
import AccountScreen from "./AccountScreen";

const SignUpScreen = () => {

    const {state , signup } = useContext(AuthContext);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
console.log(state)
    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up</Text>
            </Spacer>
            <Spacer>
                <Input label="Email" 
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input 
                secureTextEntry
                label="Password" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                />
            </Spacer>
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={()=> signup({email , password})}
                />
            </Spacer>
        </View>
    )
};

// SignUpScreen.navigationOptions = () => {
//     return {
// header:null
//     };
// };


const styles = StyleSheet.create({
    text: {
        fontSize: 15
    },
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:50
    },
    errorMessage:{
        color:'red',
        fontSize:16,
        marginLeft:15,
    }
});

export default SignUpScreen;
