import { View, Text, ImageBackground, StyleSheet } from "react-native";

const ExplorWordCard = () => {
  return (
    <View style={styles.ExplorWorkContainer}>
      <ImageBackground
        source={require("../assets/images/Frame.png")}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <Text style={styles.bgImageTitle}>
          Explor Beautiful work picked for you
        </Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
    bgImage: {
        height: 270,
        width: 300,
        justifyContent: "flex-end",
      },
      bgImageTitle: {
        fontSize: 20,
        fontWeight: 900,
        textAlign: "center",
        marginBottom: 12,
        color: "#ffff",
      },
      ExplorWorkContainer: {
        marginVertical: 40,
        height: 260,
        width: 300,
        borderWidth: 1,
        borderColor: "#f0ebe6",
        marginLeft: 30,
        borderRadius: 10,
        overflow: "hidden",
      },
})
export default ExplorWordCard;
