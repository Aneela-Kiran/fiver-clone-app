
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Link } from "expo-router";
import FeatureCard from "../components/featureCard";
import ExplorWordCard from "../components/ExplorWordCard";
import ServiceCard from "../components/serviceCard";

const Dashboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {/* Top Container */}
        <View style={styles.Top_container}>
          <Link href="/">
            <Image
              source={require("../assets/images/logo2.png")}
              style={styles.logoStyle}
              resizeMode="contain"
            />
          </Link>
          <Link href="/profile">
            <Image
              source={require("../assets/images/profile-pic.png")}
              style={styles.profileImage}
            />
          </Link>
        </View>

        {/* Search Box */}
        <View style={styles.search_box}>
          <EvilIcons
            name="search"
            size={24}
            color="black"
            style={{ marginTop: 3 }}
          />
          <TextInput
            placeholder="Search here"
            style={{ flex: 1, marginTop: 8 }}
          />
        </View>
        <View>
           {/* Popular Services */}
            <ServiceCard />

          {/* Explor work */}

            <ExplorWordCard/>

          {/* New Features card */}

            <FeatureCard />
        </View>
      </View>
    </ScrollView>
    {/* Bottom Menu Bar */}
    <View style={styles.bottomBar}>
    <TouchableOpacity style={styles.iconContainer}>
      <Ionicons name="home-outline" size={24} color="black" />
      <Text style={styles.iconText}>Home</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.iconContainer}>
      <Ionicons name="chatbubble-outline" size={24} color="black" />
      <Text style={styles.iconText}>Message</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.iconContainer}>
      <Ionicons name="search-outline" size={24} color="black" />
      <Text style={styles.iconText}>Search</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.iconContainer}>
      <Ionicons name="person-outline" size={24} color="black" />
      <Text style={styles.iconText}>Profile</Text>
    </TouchableOpacity>
  </View>
    
  );
};

const styles = StyleSheet.create({
  Top_container: {
    height: 60,
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#f0ebe6",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#fff",
  },
  search_box: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#dedcd7",
    flexDirection: "row",
    alignItems: "center",
  },
  logoStyle: {
    height: 90,
    width: 70,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
});

export default Dashboard;
