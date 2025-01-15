import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import Button from "../components/button";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
     Name: '',
     password: ''
    }
  });
  const onSubmit = data => console.log(data);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logoStyle}
      />
      <Text style={styles.Title}>Welcome to Fiver</Text>
      <Text style={styles.Desc}>
        Please enter your registration email and password
      </Text>
      <View>
      <Controller
        control={control}
        name="Name" // Corrected name
        rules={{
          required: 'Name is required',
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.Input}
            placeholder="Email or username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.Name && <Text>{errors.Name.message}</Text>}

        
        <View style={styles.Input_container}>\
          <Controller
          control={control}
          name="password"
          rules={{
            required :true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={styles.Input}
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            />
          )}  
         />
         <AntDesign
          style={styles.iconStyle}
          name="eye"
          size={20}
          color="black"
        />
        </View>
        {errors.password && <Text>This is required.</Text>}
      </View>
          {/* Button component */}
          
      <Button title="login"  onPress={handleSubmit(onSubmit)}/>
      {/* Soclial links container */}

      <Text style={{ textAlign: "center", fontWeight: 700 }}>
        or via social networks
      </Text>

      <View style={styles.social_accounts}>
        <TouchableOpacity style={styles.social_button}>
          <Image
            source={require("../assets/images/google.png")}
            style={styles.social_logo}
          />
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.social_button}>
          <Image
            source={require("../assets/images/fb-logo.png")}
            style={styles.social_logo}
          />
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View
        style={styles.navigationContainer}
      >
        <Link
          href="/dashboard"
          style={styles.navigationButton}
        >
          Join
        </Link>
        <Link
          href="/password"
          style={styles.navigationButton}
        >
          Forget Password
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    margin: 20,
  },
  logoStyle: {
    height: 60,
    width: 60,
    marginVertical: 10,
  },
  Title: {
    fontWeight: 900,
    fontSize: 18,
    marginVertical: 10,
  },
  Desc: {
    fontSize: 14,
    marginVertical: 10,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
    backgroundColor: "#1DBF73",
  },
  Input_container: {
    marginTop: 10,
    borderWidth: 1,
    padding: 5,
    borderColor: "#c0c1c2",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    
  },
  Input: {
    borderWidth: 1,
    borderColor: "#c0c1c2",
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    outlineStyle: 'none'
  },
  iconStyle: {
    marginTop: 10,
    color: "gray",
  },
  social_accounts: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  social_button: {
    padding: 10,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#e3e2e1",
    borderRadius: 5,
    paddingHorizontal: 30,
    marginHorizontal: 10,
  },
  social_logo: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  socialButtonText: {
    fontSize: 18,
    fontWeight: 900,
  },
  navigationContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 80,
  },
  navigationButton:{
    color: "#1DBF73",
     fontSize: 15,
      fontWeight: 700 
  }
});
export default Login;
