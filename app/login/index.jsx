import React, { useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { TextInput } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import Button from "../components/button";
import { useForm, Controller } from "react-hook-form";
import Colors from '../constants/colors'
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Name: '',
      password: ''
    }
  });
  
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  
  // Validation functions
  const validateEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(value) || "Please enter a valid email";
  };

  const validatePassword = (value) => {
    return value.length >= 6 || "Password must be at least 6 characters";
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigation.navigate("home"); 
  };

  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>
        
        {/* Logo */}
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logoStyle}
        />
        <Text style={styles.Title}>Welcome to Fiver</Text>
        <Text style={styles.Desc}> Please enter your registration email and password </Text>

        {/* Form */}
         {/* Name Field */}
         <Controller
          control={control}
          name="Name"
          rules={{
            required: 'Name is required',
            validate: validateEmail
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

        {/* Password Field with Visibility Toggle */}
        <View style={styles.Input_container}>
          <Controller
            control={control}
            name="password"
            rules={{ required: 'Password is required', validate: validatePassword }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.Input}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={!passwordVisible} // Toggle visibility
              />
            )}
          />
          <AntDesign
            style={styles.iconStyle}
            name={passwordVisible ? "eyeo" : "eye"} // Toggle icon based on state
            size={20}
            color="black"
            onPress={togglePasswordVisibility}
          />
        </View>
        {errors.password && <Text>{errors.password.message}</Text>}

        {/* Submit Button */}
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={{textAlign:'center',color:'white',fontWeight:700}}>Login</Text>
        </Pressable>

      </View>

      
      

      <View style={{flex:1}}>
       
        {/* Social Login */}
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

        {/* Navigation Links */}
        <View style={styles.navigationContainer}>
          <Link href="/dashboard" style={styles.navigationButton}>
            Join
          </Link>
          <Link href="/password" style={styles.navigationButton}>
            Forget Password
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  button:{
    padding:15,
    borderRadius:5,
    marginVertical:20,
    backgroundColor:Colors.secondary
},

  formContainer: {
    flex:1,
    justifyContent: "end",
    contentAlign: "bottom",
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
  Input_container: {
    marginTop: 10,
  },
  Input: {
    borderWidth: 1,
    borderColor: "#c0c1c2",
    padding: 15,
    borderRadius: 5,
    outlineStyle: 'none',
  },
  iconStyle: {
    marginTop: 10,
    color: "gray",
    position: "absolute",
    right: 10,
  },
  social_accounts: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  social_button: {
    padding: 10,
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#e3e2e1",
    borderRadius: 5,
    paddingHorizontal: 36,
    textAlign: "center",
    justifyContent: "center"
  },
  social_logo: {
    height: 20,
    width: 20,
    marginRight: 5,
  },
  socialButtonText: {
    fontSize: 18,
    fontWeight: 900,
    width: 90,
    textAlign: "center"
  },
  navigationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "end",
    marginVertical: 32,
  },
  navigationButton: {
    color: "#1DBF73",
    fontSize: 15,
    fontWeight: 700,
  },
});

export default Login;