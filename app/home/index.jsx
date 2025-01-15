import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Dashboard from "../dashboard";

// Screens
const Screen = ({ name }) => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>{name}</Text>
  </View>
);

const HomeScreen = () => <Dashboard/>;
const MailScreen = () => <Screen name="Mail" />;
const SearchScreen = () => <Screen name="Search" />;
const ProfileScreen = () => <Screen name="Profile" />;
const NotificationsScreen = () => <Screen name="Notifications" />;
const SettingsScreen = () => <Screen name="Settings" />;

const App = () => {
  const [activeScreen, setActiveScreen] = useState("Home");

  // Render the active screen
  const renderScreen = () => {
    switch (activeScreen) {
      case "Home":
        return <HomeScreen />;
      case "Mail":
        return <MailScreen />;
      case "Search":
        return <SearchScreen />;
      case "Profile":
        return <ProfileScreen />;
      case "Notifications":
        return <NotificationsScreen />;
      case "Settings":
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Render Active Screen */}
      <View style={styles.screenWrapper}>{renderScreen()}</View>

      {/* Custom Bottom Navigation */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => setActiveScreen("Home")} style={styles.navItem}>
          <Ionicons
            name="home-outline"
            size={24}
            color={activeScreen === "Home" ? "#1DBF73" : "#ccc"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Mail")} style={styles.navItem}>
          <Ionicons
            name="mail-outline"
            size={24}
            color={activeScreen === "Mail" ? "#1DBF73" : "#ccc"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Search")} style={styles.navItem}>
          <Ionicons
            name="search-outline"
            size={24}
            color={activeScreen === "Search" ? "#1DBF73" : "#ccc"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Profile")} style={styles.navItem}>
          <Ionicons
            name="person-outline"
            size={24}
            color={activeScreen === "Profile" ? "#1DBF73" : "#ccc"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Notifications")} style={styles.navItem}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={activeScreen === "Notifications" ? "#1DBF73" : "#ccc"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveScreen("Settings")} style={styles.navItem}>
          <Ionicons
            name="settings-outline"
            size={24}
            color={activeScreen === "Settings" ? "#1DBF73" : "#ccc"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screenWrapper: {
    flex: 1,
  },
  screenContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  screenText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  navItem: {
    alignItems: "center",
  },
});

export default App;