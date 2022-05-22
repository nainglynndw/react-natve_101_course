import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const arr = [
    "apple",
    "orange",
    "banana",
    1,
    2,
    4,
    true,
    false,
    "hello",
    "world",
  ];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

  const moveToRegisterScreen = () => {};

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImg}
        source={require("../assets/Images/logo.png")}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(a) => {
          setPassword(a);
        }}
      />

      <TouchableOpacity style={styles.forgotPasswordBtn}>
        <Text style={styles.forgotPassword}>Forgot password ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.register}>
        Don't have an account yet ?{" "}
        <Text style={styles.forgotPassword} onPress={moveToRegisterScreen}>
          Register
        </Text>
      </Text>
      <Text style={{ marginTop: 20, color: "white" }}>{password}</Text>
      <StatusBar hidden />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#432846",
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
