
import { View,Text } from 'react-native'
import Intro from './components/intro'


const Home=()=>{
  console.disableYellowBox = true; // Deprecated in React Native 0.63+

  return (
   <View>     
          <Intro/>      
   </View>
  )
}



export default  Home