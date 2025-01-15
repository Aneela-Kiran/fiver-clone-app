import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const Profile = () => {
  return (
    <ScrollView>
      <View>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Link href='/dashboard'>
            <AntDesign name="arrowleft" size={28} color="white" />
          </Link>
        </View>

        {/* Profile Section */}
        <View style={styles.topContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profileImageWrapper}>
              <Image
                source={require('../assets/images/profile-pic.png')}
                style={styles.profileImage}
              />
              <View style={styles.statusCircle}></View>
            </View>
            <View style={styles.profileTextWrapper}>
              <Text style={styles.profileName}>Jhon Robin</Text>
              <Text style={styles.profileBalance}>Personal Balance: 200$</Text>
            </View>
          </View>
        </View>

        {/* Settings Menu */}
        <View style={styles.settingsMenuContainer}>
          <View style={styles.settingItemWrapper}>
            <AntDesign name="hearto" size={24} color="gray" style={styles.iconStyle} />
            <View style={[styles.settingBar, styles.settingBarTopBorder]}>
              <Text>Saved</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>

          <View style={styles.settingItemWrapper}>
            <AntDesign name="printer" size={24} color="gray" style={styles.iconStyle} />
            <View style={styles.settingBar}>
              <Text>My Interest</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>

          {/* General Settings */}
          <Text style={styles.generalSettingsHeader}>General</Text>

          <View style={styles.settingItemWrapper}>
            <AntDesign name="setting" size={24} color="gray" style={styles.iconStyle} />
            <View style={[styles.settingBar, styles.settingBarTopBorder]}>
              <Text>Settings</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>

          <View style={styles.settingItemWrapper}>
            <AntDesign name="circledowno" size={24} color="gray" style={styles.iconStyle} />
            <View style={styles.settingBar}>
              <Text>Online Status</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>

          <View style={styles.settingItemWrapper}>
            <MaterialIcons name="payments" size={24} color="gray" style={styles.iconStyle} />
            <View style={styles.settingBar}>
              <Text>Payments</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>

          <View style={styles.settingItemWrapper}>
            <FontAwesome name="send" size={24} color="gray" style={styles.iconStyle} />
            <View style={styles.settingBar}>
              <Text>Invite Friend</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>

          <View style={styles.settingItemWrapper}>
            <FontAwesome name="sellsy" size={24} color="gray" style={styles.iconStyle} />
            <View style={styles.settingBar}>
              <Text>Seller</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>

          <View style={styles.settingItemWrapper}>
            <FontAwesome name="support" size={24} color="gray" style={styles.iconStyle} />
            <View style={styles.settingBar}>
              <Text>Support</Text>
              <FontAwesome name="angle-right" size={24} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1DBF73',
    padding: 10,
  },
  topContainer: {
    height: 200,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1DBF73',
  },
  profileContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageWrapper: {
    flexDirection: 'row',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
    marginLeft: 20,
  },
  statusCircle: {
    height: 15,
    width: 15,
    borderRadius: 30,
    backgroundColor: 'green',
    marginTop: 33,
    marginLeft: -12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileTextWrapper: {
    marginLeft: 20,
  },
  profileName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  profileBalance: {
    color: 'white',
    fontWeight: '700',
  },
  settingsMenuContainer: {
    margin: 10,
    padding: 10,
  },
  generalSettingsHeader: {
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    fontWeight: '900',
  },
  settingItemWrapper: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginTop: 9,
  },
  settingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    width: '100%',
    padding: 10,
    borderColor: '#dcdde0',
  },
  settingBarTopBorder: {
    borderTopWidth: 1,
  },
});

export default Profile;
