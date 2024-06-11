import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {user as UserRepository} from '../repositories';
import {SafeAreaView} from 'react-native-safe-area-context';

function Profile(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text> Profile</Text>
    </SafeAreaView>
  );
}
export default Profile;
