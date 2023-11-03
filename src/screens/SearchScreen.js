import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import {BaseText as Text, InputField} from '../components';
import {Post} from './HomeScreen';

import {
  DARK_BLACK,
  GRAY,
  LIGHT_GRAY,
  SOCIAL_BLUE,
  SOCIAL_WHITE,
  WHITE,
} from '../assets/colors';
import ICONS from '../assets/icons';

import Image1 from '../assets/images/ngo1.jpg';
import Image6 from '../assets/images/ngo6.jpg';
import Image2 from '../assets/images/ngo2.jpg';
import Image4 from '../assets/images/ngo10.jpg';
import Image5 from '../assets/images/ngo8.jpg';
import Image3 from '../assets/images/ngo9.jpg';

const SearchScreen = () => {
  const [activeTagIndex, setActiveTagIndex] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const _renderItem = ({item, index}) => {
    return (
      <Pressable
        style={[styles.tag, activeTagIndex === index && styles.activeTag]}
        onPress={() => setActiveTagIndex(index)}>
        <Text
          style={{
            ...styles.tagText,
            color: activeTagIndex == index ? WHITE : DARK_BLACK,
          }}>
          {item}
        </Text>
      </Pressable>
    );
  };

  const tags = [
    'All',
    'Profiles',
    'Photos',
    'Videos',
    'Text',
    'Links',
    'People',
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputField
          placeholder="Search for people, posts, tags..."
          suffixIcon={<ICONS.SEARCH color={LIGHT_GRAY} />}
          additionalStyles={{
            marginVertical: 15,
          }}
          value={searchValue}
          setValue={setSearchValue}
        />
        <Text
          style={{
            fontSize: 16,
            color: DARK_BLACK,
            marginHorizontal: 20,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Popular
        </Text>
        <FlatList
          data={tags}
          renderItem={_renderItem}
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
          showsHorizontalScrollIndicator={false}
        />
        <Post
          images={[Image6]}
          user={{name: 'Jeremiah Lena', image: Image1}}
          timePosted="8hrs ago"
          additionalStyles={{
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          }}
        />
        <Post
          images={[Image2, Image1]}
          user={{name: 'Olakunle Moss', image: Image3}}
          timePosted="8hrs ago"
          text="My love for food is definitely not from this world. It is divine. Science cannot proffer any explanation"
        />
        <Post
          user={{name: 'Winner Okere', image: Image4}}
          timePosted="2 weeks ago"
          text="Wisdom is the principal thing. In all thy gettings get understanding"
        />
        <Post
          user={{name: 'Marvelous Lena', image: Image3}}
          timePosted="3 weeks ago"
          text="The Lord has been really good to me. Thank you for daily loading me with you benefits."
          images={[Image4, Image5, Image3]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tag: {
    // backgroundColor: SOCIAL_BLUE,
    borderColor: LIGHT_GRAY,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 35,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 15,
    color: DARK_BLACK,
  },
  activeTag: {
    backgroundColor: SOCIAL_BLUE,
    borderColor: SOCIAL_BLUE,
  },
});
export default SearchScreen;
