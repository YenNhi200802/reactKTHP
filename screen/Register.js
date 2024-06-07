import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {image, colors, fontSizes} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isValidEmail, isValidPassword} from '../ultilies/Validation';
function Register(props) {
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
  return (
    <View style={{flex: 100}}>
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
            Here's your first step with us!
          </Text>
          <Image
            source={image.logo}
            style={{width: 150, height: 150, alignSelf: 'center'}}
          />
        </View>
        <View
          style={{
            flex: 55,
            backgroundColor: '#ffdabd',
            padding: 10,
            margin: 10,
            borderRadius: 20,
          }}>
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
          <View style={{marginHorizontal: 15}}>
            <Text
              style={{
                fontSize: fontSizes.h5,
                color: colors.primary,
                fontWeight: 'bold',
              }}>
              Retype password:
            </Text>
            <TextInput
              onChangeText={text => {
                setErrorPassword(
                  isValidPassword(text) == true ? '' : 'Re-Password must ',
                );
                setPassword(text);
              }}
              secureTextEntry={true}
              placeholder="Re-enter your password"
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
          <TouchableOpacity
            disabled={isValidActionOk() == false}
            onPress={() => {
              alert(`Email = ${email}, Password = ${password}`);
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
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 20}}>
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
export default Register;
