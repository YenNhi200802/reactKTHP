import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIHeader} from '../../components';
import FoodItem from '../FoodList/FoodItem';
import ChatItem from './ChatItem';
import {interpolate} from 'react-native-reanimated';

function Chat(props) {
  const [user, setUser] = useState([
    {
      url: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg',
      name: 'NiNa Jea',
      message: 'Hello! How are you?',
      numberOfUnreadMessages: 3,
    },
    {
      url: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg',
      name: 'NiNa Jea',
      message: 'Hello! How are you?',
      numberOfUnreadMessages: 0,
    },
    {
      url: 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg',
      name: 'NiNa Jea',
      message: 'Hello! How are you?',
      numberOfUnreadMessages: 0,
    },
  ]);
  const {numberOfStars} = props;
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View>
      <UIHeader
        title={'Notification'}
        leftIconName={'star'}
        rightIconName={'search'}
        onPressLeftIcon={''}
        onPressRightIcon={''}
      />
      <FlatList
        data={user}
        renderItem={({item}) => (
          <ChatItem
            onPress={() => {
              navigate('Messenger');
            }}
            user={item}
            key={item.name}
          />
        )}
      />
    </View>
  );
}

export default Chat;
