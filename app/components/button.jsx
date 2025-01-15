import { View,Text,Pressable,StyleSheet } from "react-native"
import { Link } from 'expo-router'
import Colors from '../constants/colors'
const Button = ({title}) => {
  return (
   <View>
            <Pressable style={styles.button}>
                    <Text style={{textAlign:'center',color:'white',fontWeight:700}}>
                    {title}</Text>
            </Pressable>
   </View>
  )
}
const styles = StyleSheet.create({
    button:{
        padding:15,
        borderRadius:5,
        marginVertical:20,
        backgroundColor:Colors.secondary
    }
})
export default Button