import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const RegisterScreen = (props) => {
  const gotoLogin = () => {
    props.navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.logoImg}
          source={require("../assets/Images/logo.png")}
        />
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />
        <TextInput style={styles.input} placeholder="Address" />
        <TextInput style={styles.input} placeholder="Bio" />
        <TextInput style={styles.input} placeholder="Email" />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.register}>
          Already have an account ?{" "}
          <Text style={styles.forgotPassword} onPress={gotoLogin}>
            Login
          </Text>
        </Text>
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 10,
    backgroundColor: "#432846",
  },
  scroll: {
    width: "100%",
  },
  logoImg: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginTop: 20,
  },
  forgotPasswordBtn: {
    alignSelf: "flex-end",
    marginRight: "5%",
    marginTop: 10,
  },
  forgotPassword: {
    color: "#065cc4",
  },
  loginBtn: {
    width: "50%",
    padding: 10,
    backgroundColor: "#688701",
    borderRadius: 50,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  register: {
    color: "#fff",
    marginTop: 20,
  },
});
