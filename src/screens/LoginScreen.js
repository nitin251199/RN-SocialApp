import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DARK_BLACK,
  SOCIAL_BLUE,
  SOCIAL_PINK,
  SOCIAL_WHITE,
  WHITE,
} from '../assets/colors';
import CustomButton from '../components/CustomButton';
import InputField from '../components/CustomInput';

// import {errorToast, successToast} from '../components/Toasts';
import BannerSlider from '../components/BannerSlider';
import {Fonts} from '../theme';
import {CommonActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

export default function LoginScreen({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [contentPadding, setContentPadding] = useState(50);

  const animated = new Animated.Value(600);
  const duration = 400;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 0,
      duration: duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const dispatch = useDispatch();

  const signIn = async () => {
    setLoading(true);
    setTimeout(() => {
      let body = {
        // role_type: roleId,
        email: email,
        password: password,
      };
      // const response = await postData('api/getLogin', body);
      // if (response.success) {
      //   successToast('Login Successful !');
      //   setLoading(false);
      dispatch({
        type: 'SET_USER',
        payload: {
          id: 1,
          name: 'Nidhi Sharma',
          email: email,
          phone: '1234567890',
        },
      });
      // } else {
      //   errorToast('Invalid Credentials', 'or User not found!');
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'HomeStack'}],
        }),
      );
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // or some other action
        setContentPadding(30);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setContentPadding(50);
        // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: WHITE,
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={WHITE} />
      <BannerSlider />
      <Animated.View
        style={{
          paddingHorizontal: 25,
          paddingTop: contentPadding,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: WHITE,
          flex: 1,
          transform: [{translateY: animated}],
          opacity: animated.interpolate({
            inputRange: [0, 600],
            outputRange: [1, 0],
          }),
          // justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '900',
            fontFamily: Fonts.primaryBold,
            color: SOCIAL_BLUE,
            marginBottom: 30,
          }}>
          Welcome !
        </Text>

        <InputField
          label={'Email ID'}
          value={email}
          onChangeText={setEmail}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          value={password}
          onChangeText={setPassword}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          secure={!showPass}
          setSecure={setShowPass}
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />

        <CustomButton
          loading={loading}
          label={'Login'}
          onPress={() => signIn()}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 30,
              borderWidth: 1,
              padding: 15,
              borderRadius: 10,
              borderColor: SOCIAL_BLUE,
            }}>
            <Text
              style={{
                color: DARK_BLACK,
                fontSize: 16,
                fontWeight: '700',
              }}>
              New to the app?
            </Text>
            <Text style={{color: SOCIAL_BLUE, fontSize: 16, fontWeight: '700'}}>
              {' '}
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}
