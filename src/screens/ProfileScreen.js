import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {BaseText as Text} from '../components';

import Image7 from '../assets/images/7.jpeg';
import Image3 from '../assets/images/ngo3.jpg';
import Image1 from '../assets/images/ngo1.jpg';
import Image6 from '../assets/images/ngo6.jpg';
import Image2 from '../assets/images/ngo2.jpg';
import Image4 from '../assets/images/ngo10.jpg';

import ICONS from '../assets/icons';
import {
  DARK_BLACK,
  GRAY,
  LIGHT_GRAY,
  SOCIAL_BLUE,
  WHITE,
} from '../assets/colors';
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';
import {Post} from './HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch({type: 'LOGOUT'});

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'AuthStack'}],
      }),
    );
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: WHITE}}
      contentContainerStyle={{
        paddingBottom: 100,
      }}>
      <View style={styles.coverImageContainer}>
        <Image source={Image7} style={styles.coverImage} />
        <View style={styles.actionContainer}>
          <Menu>
            <MenuTrigger style={styles.iconContainer}>
              <ICONS.DOTS_VERTICAL size={20} />
            </MenuTrigger>
            <MenuOptions
              customStyles={{
                optionText: {
                  color: DARK_BLACK,
                  fontSize: 15,
                },
                optionWrapper: {
                  padding: 15,
                },
              }}>
              <MenuOption
                style={{
                  color: DARK_BLACK,
                }}
                onSelect={() => logOut()}
                text="Logout"
              />
            </MenuOptions>
          </Menu>
          {/* <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
            <ICONS.BOOKMARKS size={20} />
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.userDetailsContainer}>
        <Image source={Image3} style={styles.userImage} />
        <Text
          type="bold"
          style={{
            fontSize: 18,
            marginTop: 10,
            marginVertical: 3,
            color: DARK_BLACK,
          }}>
          {user?.name}
        </Text>
        <Text type="light" style={{color: GRAY, fontSize: 16, marginBottom: 3}}>
          Gwalior, MP
        </Text>
        <Text style={{fontSize: 16, color: LIGHT_GRAY}}>
          Writer by Profession, Artist by Passion
        </Text>
        <View style={styles.followingInformation}>
          <View>
            <Text style={styles.number}>2,354</Text>
            <Text style={{color: LIGHT_GRAY}}>Total Donation</Text>
          </View>
          <View>
            <Text style={styles.number}>354</Text>
            <Text style={{color: LIGHT_GRAY}}>People Helped</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.followingButton}>
          <Text style={{fontSize: 15, fontWeight: '600', color: GRAY}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <View style={styles.postContainer}>
          <Text
            type="bold"
            style={{
              fontSize: 18,
              color: DARK_BLACK,
              paddingHorizontal: 20,
              paddingBottom: 15,
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}>
            My Posts
          </Text>

          <Post
            images={[Image6]}
            user={{name: 'Nidhi Sharma', image: Image1}}
            timePosted="8hrs ago"
            additionalStyles={{
              borderTopWidth: 0,
              borderTopColor: 'transparent',
            }}
          />
          <Post
            user={{name: 'Nidhi Sharma', image: Image4}}
            timePosted="2 weeks ago"
            text="Wisdom is the principal thing. In all thy gettings get understanding"
          />
          <Post
            images={[Image2]}
            user={{name: 'Nidhi Sharma', image: Image3}}
            timePosted="3 weeks ago"
            text="My love for food is definitely not from this world. It is divine. Science cannot proffer any explanation"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  coverImageContainer: {
    paddingHorizontal: 20,
    height: '12%',
    position: 'relative',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  coverImage: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DARK_BLACK,
    borderColor: GRAY,
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    marginVertical: 10,
  },
  actionContainer: {
    paddingTop: 0,
    flex: 1,
    alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  userImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
    borderColor: SOCIAL_BLUE,
    borderWidth: 3,
    backgroundColor: 'red',
    marginTop: -60,
  },
  userDetailsContainer: {
    alignItems: 'center',
  },
  followingInformation: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -4,
  },
  number: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 2,
    color: DARK_BLACK,
  },
  followingButton: {
    borderWidth: 1,
    borderColor: DARK_BLACK,
    width: 120,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  postContainer: {
    marginTop: 20,
  },
});
export default ProfileScreen;
