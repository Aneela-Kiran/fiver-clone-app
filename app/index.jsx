
import { View,Text } from 'react-native'
import Intro from './components/intro'
import { Link } from 'expo-router';


const Home=()=>{
  console.disableYellowBox = true; // Deprecated in React Native 0.63+

  return (
   <View style={{flex:1}}>     
          <Intro/>      
   </View>
  )
}



export default  Home