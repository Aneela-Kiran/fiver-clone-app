// import React from "react";
// import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
// import { useState, useEffect } from "react";
// import { ToastAndroid } from "react-native";

// const ServiceCard = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading ,setLoading] = useState([false])
//         {/* API Calling*/}
//   const getCategories = async () => {
//     try{
//       setLoading(true)
//       const request = await fetch(
//         "http://localhost:1337/api/categories?populate=*"
//       );
//       let response = await request.json();
//       setCategories(response.data);
//     }catch(error){
//       setLoading(false)
//       ToastAndroid.show('cant fetch data due to failed access',ToastAndroid.SHORT)
//       setCategories([])
//     }finally{
//       setLoading(false)
//     }
//     };

//   useEffect(() => {
//     getCategories();
//   }, []);

//   return (
   
//     <View>
//       {
//         loading ?(
//           <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//           <Text style={{fontSize:20,fontWeight:'bold'}}>Loading</Text>
//           </View>
//         ):(

//         <View>
//               <Text style={styles.heading}>Popular Services</Text>
//               <View style={styles.servicesContainer}>
//                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                   {categories.map((category) => (
//                     <View key={category.id} style={styles.serviceCard}>
//                       <Image
//                         source={{ uri: `http://localhost:1337${category.image.url}` }}
//                         style={styles.serviceImage}
//                         resizeMode="cover"
//                       />
//                       <Text style={{ marginVertical: 10 }}>{category.title}</Text>
//                     </View>
//                   ))}
//                 </ScrollView>
//                 <View></View>
//               </View>
//         </View>
//           )
//       }
//     </View>

//   );
// };

// const styles = StyleSheet.create({
//   heading: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginVertical: 10,
//     marginLeft: 10,
//   },
//   servicesContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//   serviceCard: {
//     width: 140,
//     height: 150,
//     alignItems: "center",
//     borderRadius: 5,
//     margin: 10,
//     overflow: "hidden",
//     elevation: 5,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     backgroundColor: "#fff",
//   },
//   serviceImage: {
//     height: 100,
//     width: 160,
//     marginBottom: 5,
//   },
// });

// export default ServiceCard;
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
const ServiceCard = () => {
  const [categories, setCategories] = useState([]);
        {/* API Calling*/}
    const getCategories = async () => {   
    try{
      const request = await fetch(
        "http://192.168.167.222:1337/api/categories?populate=*"
      );
      let response = await request.json();
      setCategories(response.data);
    }catch(error){ 
      console.log('error fetching data',error) 
    }
    };
  useEffect(() => {
    getCategories();
  }, []);
  return (
        <View>
              <Text style={styles.heading}>Popular Services</Text>
              <View style={styles.servicesContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {categories.map((category) => (
                    <View key={category.id} style={styles.serviceCard}>
                      <Image
                        source={{ uri: `http://192.168.167.222:1337${category.image.url}` }}
                        style={styles.serviceImage}
                        resizeMode="cover"
                      />
                      <Text style={{ marginVertical: 10 }}>{category.title}</Text>
                    </View>
                  ))}
                </ScrollView>
                <View></View>
              </View>
        </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  serviceCard: {
    width: 140,
    height: 150,
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
  },
  serviceImage: {
    height: 100,
    width: 160,
    marginBottom: 5,
  },
});

export default ServiceCard;
//http:192.168.167.150:1337/uploads/software_devlopment_a7f6547a91.png"