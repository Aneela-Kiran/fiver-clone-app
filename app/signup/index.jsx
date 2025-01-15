import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Button from '../components/button';


const SignUp = () => {
  
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')



 async function onSubmit(data) {
   console.log(data)
   try{
    const response = await fetch('https://675dc2ae63b05ed07978bebe.mockapi.io/catagories',{ method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)

  })
  const ResponseData = await response.json();
  console.log(ResponseData)
  }catch(error){
    console.log(error)
  }
} 


  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>

      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} value={email}/>
      {
        email==''?<Text style={styles.error}>Please enter your Email</Text>:null
      }
      <TextInput style={styles.input} placeholder='Public Username' onChangeText={setName}value={name} />
      {
        name==''?<Text style={styles.error}>Please enter your Name</Text>:null
      }
      <Text style={styles.usernameNote}>You can't change your username, so choose wisely.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Password'
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          keyboardType='numeric'
          style={styles.passwordInput}
        />
        <AntDesign style={styles.eyeIcon} name='eye' size={20} color='gray' />
      </View>
      {
        password==''?<Text style={styles.error}>Please enter your Password</Text>:null
      }

      <View style={styles.rulesContainer}>
        <View style={styles.ruleRow}>
          <Octicons name='dash' size={20} color='gray' />
          <Text style={styles.ruleText}>At least 8 characters</Text>
        </View>
        <View style={styles.ruleRow}>
          <Octicons name='dash' size={20} color='gray' />
          <Text style={styles.ruleText}>At least 1 uppercase letter</Text>
        </View>
        <View style={styles.ruleRow}>
          <Octicons name='dash' size={20} color='gray' />
          <Text style={styles.ruleText}>At least 1 lowercase letter</Text>
        </View>
        <View style={styles.ruleRow}>
          <Octicons name='dash' size={20} color='gray' />
          <Text style={styles.ruleText}>At least 1 number</Text>
        </View>
      </View>

      <Button title='Signup' path='/dashboard' onSubmit={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#1DBF73',
  },
  input: {
    borderWidth: 1,
    borderColor: '#c0c1c2',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  usernameNote: {
    marginTop: 5,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 10,
    borderWidth: 1,
    padding: 5,
    borderColor: '#c0c1c2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  passwordInput: {
    flex: 1,
    outlineStyle: 'none'
  },
  eyeIcon: {
    marginTop: 10,
    color: 'gray',
  },
  rulesContainer: {
    marginTop: 10,
  },
  ruleRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 2,
  },
  ruleText: {
    marginLeft: 5,
  },
  error:{
    color:'red',
    fontSize:12
  }
});

export default SignUp;