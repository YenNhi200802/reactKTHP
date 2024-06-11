import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {image, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isValidEmail, isValidPassword} from '../ultilies/Validation';
import Register from './Register';

function Login(props) {
  //states for validating.
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  //states to store email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isValidActionOk = () =>
    email.length > 0 &&
    password.length > 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View style={{flex: 100, backgroundColor: 'white'}}>
      <ImageBackground
        source={image.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            flex: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 10,
            marginLeft: 10,
          }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: fontSizes.h2,
              fontWeight: 'bold',
              width: '50%',
            }}>
            Already have an Account?
          </Text>
          <Image
            source={image.logo}
            style={{width: 150, height: 150, alignSelf: 'center'}}
          />
        </View>
        <View style={{flex: 30}}>
          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.primary,
                fontWeight: 'bold',
              }}>
              Email:
            </Text>
            <TextInput
              onChangeText={text => {
                setErrorEmail(
                  isValidEmail(text) == true
                    ? ''
                    : 'Email not in correct format',
                );
                setEmail(text);
              }}
              placeholder="example@gmail.com"
              placeholderTextColor={colors.sub}
            />
            <View
              style={{
                height: 1,
                backgroundColor: colors.sub,
                width: '100%',
                marginHorizontal: 15,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{color: 'red', marginBottom: 5, fontSize: fontSizes.h6}}>
              {errorEmail}
            </Text>
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.primary,
                fontWeight: 'bold',
              }}>
              Password:
            </Text>
            <TextInput
              onChangeText={text => {
                setErrorPassword(
                  isValidPassword(text) == true
                    ? ''
                    : 'Password must be at 8 characters',
                );
                setPassword(text);
              }}
              secureTextEntry={true}
              placeholder="Enter your password"
              placeholderTextColor={colors.sub}
            />
            <View
              style={{
                height: 1,
                backgroundColor: colors.sub,
                width: '100%',
                marginHorizontal: 15,
                alignSelf: 'center',
              }}
            />
            <Text
              style={{color: 'red', marginBottom: 5, fontSize: fontSizes.h6}}>
              {errorPassword}
            </Text>
          </View>
        </View>
        <View style={{flex: 20}}>
          <TouchableOpacity
            disabled={isValidActionOk() == false}
            onPress={() => {
              // alert(`Email = ${email}, Password = ${password}`);
              navigate('UITab');
            }}
            style={{
              backgroundColor:
                isValidActionOk() == true ? colors.primary : colors.inactive,
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
              alignSelf: 'center',
              borderRadius: 25,
            }}>
            <Text style={{padding: 8, fontSize: fontSizes.h5, color: 'white'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={{
              padding: 5,
            }}>
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h5,
                color: colors.primary,
                alignSelf: 'center',
              }}>
              New user? Register now
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 25}}>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <View style={{height: 1, backgroundColor: 'black', flex: 1}} />
            <Text
              style={{
                padding: 8,
                fontSize: fontSizes.h6,
                colors: 'black',
                alignSelf: 'center',
                marginHorizontal: 10,
              }}>
              Use other methods?
            </Text>
            <View style={{height: 1, backgroundColor: 'black', flex: 1}} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Icon name="facebook" size={35} color={'#0866ff'} />
            <View style={{width: 20}} />
            <Icon name="google" size={35} color={'#df3c32'} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Login;
