import { useState, useEffect } from "react";
import { View ,Text, ScrollView, StyleSheet ,ImageBackground ,ToastAndroid } from "react-native";
function FeatureCard() {
  const [Features, setFeatures] = useState([]);
  const [loading ,setloading] = useState(false)
  {
    /* API calling */
  }
  const getFeatures = async () => {
    try{
      setloading(true)
      const request = await fetch(
        "http://192.168.167.222:1337/api/features?populate=*"
      );
      if(request.status !==200){
        setFeatures([])
        ToastAndroid.show('Failed to fetch data', ToastAndroid.SHORT);
      }else{
        let response = await request.json();
        setFeatures(response.data);
      }  
    }catch(error){
      ToastAndroid.show('Something went wrong .', ToastAndroid.SHORT);
      console.log(error)
      setFeatures([])
    } finally {
      setloading(false); 
    }
  };
  useEffect(() => {
    getFeatures();
  }, []);

  return (
    <View>
    { loading ?(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Loading</Text>
        </View>
      ):(
        <View style={styles.container}>
        <Text style={styles.FeaturesTitle}>
          Whats New On fiver?
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={styles.FeaturesContainer}
          >
            {Features.map((item, index) => (
              <View key={index} style={styles.FeatureCard}>
                <ImageBackground
                  source={{uri: `http://192.168.167.222:1337${item.image.url}`}}
                  style={{ height: 200, width: 300, borderRadius: 10 }}
                  resizeMode="cover"
                >
                  <Text style={styles.title}>{item.title}</Text>
                </ImageBackground>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      ) 
    }
    </View>
   
  );
}


const styles = StyleSheet.create({
container:{
   marginTop: 20,
},
FeaturesTitle: {
    margin: 10, 
    fontWeight: 900, 
    fontSize: 28 
},
FeaturesContainer:{
    flexDirection: "row",
    borderRadius: 10
},
 FeatureCard: {
    margin: 10,
    overflow: "hidden",
    borderRadius: 20,
 },
title: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: 900,
    textAlign: "center",
    marginBottom: 12,
    color: "black",
},
});

export default FeatureCard;
