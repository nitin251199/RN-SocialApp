import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import InputField from '../components/CustomInput';
import {Color, Fonts} from '../theme';
// import {errorToast, successToast} from '../components/Toasts';
import {Image} from 'react-native';
import BannerSlider from '../components/BannerSlider';
import {useEffect} from 'react';
import {DARK_BLACK, SOCIAL_BLUE, WHITE} from '../assets/colors';

export default function RegisterScreen({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const animated = new Animated.Value(600);
  const duration = 300;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: 0,
      duration: duration,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const signIn = async () => {
    // setLoading(true);
    let body = {
      role_type: roleId,
      email: email,
      password: password,
    };
    // const response = await postData('api/getLogin', body);
    // if (response.success) {
    //   successToast('Login Successful !');
    //   setLoading(false);
    //   dispatch({
    //     type: 'SET_USER',
    //     payload: response.data,
    //   });
    // } else {
    //   errorToast('Invalid Credentials', 'or User not found!');
    //   setLoading(false);
    // }
  };

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
          paddingTop: 30,
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
          // elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '900',
            fontFamily: Fonts.primaryRegular,
            color: SOCIAL_BLUE,
          }}>
          Join Us !
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            fontFamily: Fonts.primaryRegular,
            color: SOCIAL_BLUE,
            marginBottom: 30,
          }}>
          Open a free account now
        </Text>

        <InputField
          label={'Name'}
          value={email}
          onChangeText={setEmail}
          icon={
            <MaterialIcons
              name="account-circle"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Mobile No.'}
          value={password}
          onChangeText={setPassword}
          icon={
            <Ionicons
              name="call-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Referral Code'}
          value={password}
          onChangeText={setPassword}
          icon={
            <Ionicons
              name="code"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
        />

        <CustomButton
          loading={loading}
          label={'Register'}
          onPress={() => signIn()}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
