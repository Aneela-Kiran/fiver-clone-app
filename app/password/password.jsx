
import React from 'react'
import {  StyleSheet, View ,Text } from 'react-native'
import { TextInput } from 'react-native'
import Button from '../components/button'

const ForgetPassword = () => {
  return (
   <View style={styles.container}>
        <Text style={styles.heading}>Forget password</Text>
        <TextInput placeholder='Emain'style={styles.input} />
        <Text style={{marginTop:5}}>Your confirmation link will be sent to your Email</Text>
        <Button title='continue' path='/login' />
   </View>
  )
}
const styles=StyleSheet.create({
    container:{
        marginTop:100,
        margin:20
    },
    heading:{
            fontSize:25,
            margin:20,
            fontWeight:900,
            color:'#1DBF73'
    },
    input:{
        borderWidth:1,
        borderColor:'#c0c1c2',
        padding:15,
        marginTop:20,
        borderRadius:5
    },
    
})
export default ForgetPassword