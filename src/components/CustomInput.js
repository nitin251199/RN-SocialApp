import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Color, Fonts} from '../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SOCIAL_BLUE} from '../assets/colors';

export default function CustomInput({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  onChangeText,
  value,
  editable,
  secure,
  setSecure,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType == 'password' ? (
        <View
          style={{
            flex: 1,
            paddingVertical: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder={label}
            placeholderTextColor="#999"
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            value={value}
            style={{
              color: '#000',
              paddingVertical: 0,
              flex: 1,
              fontFamily: Fonts.primaryBold,
            }}
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={() => setSecure(prev => !prev)}>
            <MaterialCommunityIcons
              name={secure ? 'eye-off' : 'eye'}
              color={'#999'}
              size={23}
              style={{
                paddingHorizontal: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          placeholder={label}
          editable={editable}
          placeholderTextColor="#999"
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          value={value}
          style={{
            flex: 1,
            paddingVertical: 0,
            color: '#000',
            fontFamily: Fonts.primaryBold,
          }}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text
          style={{
            color: SOCIAL_BLUE,
            fontWeight: '700',
            fontFamily: Fonts.primaryBold,
          }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
