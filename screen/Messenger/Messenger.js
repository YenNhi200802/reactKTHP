import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {images, colors, icons, fontSizes} from '../../constants/index.js';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {UIHeader} from '../../components/index.js';
import MessengerItem from './MessengerItem.js';
import {interpolate} from 'react-native-reanimated';

function Messenger(props) {
  const [messages, setMessages] = useState([
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
              alert(`press: ${item.name}`);
            }}
            user={item}
            key={item.name}
          />
        )}
      />
    </View>
  );
}

export default Messenger;
