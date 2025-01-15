import React from 'react';
import { View, Text, Image, StyleSheet, Pressable , Dimensions } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Link } from 'expo-router';
import { Video } from 'expo-av';

const Intro = () => {
  return (
    <View style={[styles.container]}>
      
     
          <Video
            source={require('../assets/background-vedio.mp4')} 
            style={StyleSheet.absoluteFillObject}
            resizeMode="cover"
            shouldPlay
            isLooping
          />
         
        <View style={[styles.content,{marginTop:340}]}>
          <Image
            source={require('../assets/images/logo1.png')}
            style={styles.logoStyle}
          />
          <Text style={styles.title}>Freelance Service.</Text>
          <Text style={styles.title}>On Demand.</Text>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.servicesContainer}>
                   
                <View style={styles.services}>
                  <MaterialIcons name="content-paste-search" size={40} color="#1DBF73" />
                  <Text style={styles.serviceText}>Find a Services</Text>
                </View>
                   
                <View style={styles.services}>
                  <MaterialCommunityIcons name="file-document-multiple" size={40} color="#1DBF73" />
                  <Text style={styles.serviceText}>Selling a Service</Text>
                </View>
          </View>

                    
          <View style={styles.buttons}>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}><Link href='/login'>Skip</Link></Text>
                </Pressable>

                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}><Link href='/signup'>Sign Up</Link></Text>
                </Pressable>
          </View>

        </View>
           
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle:{
    height: 61,
    width:201,
     marginBottom: 10
},
  title: {
    fontSize: 23,
    fontWeight:900,
    color: '#fff',
  },
  content: {
    marginTop: 120,
    alignItems: 'center',
    justifyContent:'center'
  },
  mainContainer: {
    borderRadius: 10,
    margin: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f7f8fa',
    alignItems: 'center',
    marginTop:112
  },
  servicesContainer:{
    flexDirection: 'row',
     justifyContent: 'space-around'
  },
  services: {
    height: 120,
    width: 130,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 5,
    padding: 10,
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-50
  },
  serviceText: {
    fontSize: 12,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 90,
  },
  buttonText: {
    color: '#1DBF73',
    fontWeight: 'bold',
    fontSize:16
  },
});

export default Intro;