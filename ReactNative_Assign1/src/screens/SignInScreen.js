import React,{useContext} from "react";
import {View , Text, StyleSheet } from "react-native";
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignInScreen = () => {
  const { state, signin ,clearErrorMessage} = useContext(AuthContext);

  return (
      <View style={styles.container}>
          <NavigationEvents 
          onWillBlur= {clearErrorMessage}
          />
          <AuthForm
              headerText="Sign In for Account"
              errorMessage={state.errorMessage}
              submitButtonText="Sign In"
              onSubmit={signin}
          />
          <NavLink
              routeName="Signup"
              text="Dont have an account ? Sign up instead"
          />
      </View>
  )
};

SignInScreen.navigationOptions = () => {
  header: null
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      marginBottom: 50
  },
});
export default SignInScreen;
