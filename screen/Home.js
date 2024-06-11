import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {image, colors, fontSizes} from '../constants';
import {UIButton} from '../components';
import {preset} from '../jest.config';
import Login from './Login';
import Register from './Register';

function Home(props) {
  //state => when state is change => UI is reloaded.
  //like getter/setter.
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Indivaidual',
      isSelected: false,
    },
  ]);
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View
      style={{
        flex: 100,
      }}>
      <ImageBackground
        source={image.background}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            flex: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={image.logo}
              style={{
                marginStart: 10,
                marginEnd: 5,
                width: 30,
                height: 30,
              }}
            />
            <Text
              style={{
                color: colors.second,
              }}>
              My Shop NFN
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 20,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginBottom: 3,
              color: colors.primary,
              fontSize: fontSizes.h5,
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              marginBottom: 3,
              color: colors.primary,
              fontWeight: 'bold',
              fontSize: fontSizes.h4,
            }}>
            MY SHOP NFN
          </Text>
          <Text
            style={{
              marginBottom: 3,
              color: colors.primary,
              fontSize: fontSizes.h5,
            }}>
            Please select your account type!
          </Text>
        </View>
        <View
          style={{
            flex: 20,
          }}></View>
        <View
          style={{
            flex: 60,
          }}>
          <UIButton
            onPress={() => navigate('Login')}
            title={'Login'.toUpperCase()}
            isSelected={true}
          />
          <UIButton
            onPress={() => navigate('Register')}
            title={'Register'.toUpperCase()}
            isSelected={true}
          />
          <Text
            style={{
              color: colors.sub,
              fontSize: fontSizes.h6,
              alignSelf: 'center',
            }}>
            Want to register new Account?
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Home;
