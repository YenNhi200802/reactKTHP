import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {image, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

function _getColorFromStatus(status) {
  // if (status.toLowerCase().trim() == 'Opening soon') {
  //   return colors.inactive;
  // } else if (status.toLowerCase().trim() == 'Closing soon') {
  //   return colors.sub;
  // } else if (status.toLowerCase().trim() == 'Comming soon') {
  //   return colors.primary;
  // }
  // return colors.inactive;
  return status.toLowerCase().trim() == 'opening now'
    ? colors.primary
    : status.toLowerCase().trim() == 'closing soon'
    ? colors.sub
    : status.toLowerCase().trim() == 'comming soon'
    ? colors.second
    : colors.primary;
}
function FoodItem(props) {
  let {name, url, status, price, website, socialNetworks} = props.food;
  const {onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 10,
        }}
        source={{
          uri: url,
        }}
      />
      <View style={{flex: 1, marginRight: 10}}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.h5,
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <View style={{height: 1, backgroundColor: colors.inactive}} />
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: colors.sub, fontSize: fontSizes.h6}}>
            Status:
          </Text>
          <Text
            style={{
              color: _getColorFromStatus(status),
              fontSize: fontSizes.h6,
            }}>
            {status.toUpperCase()}
          </Text>
        </View>
        <Text style={{color: colors.sub, fontSize: fontSizes.h6}}>
          Price: {price} VND
        </Text>
        <Text style={{color: colors.sub, fontSize: fontSizes.h6}}>
          FoodType: Pizza
        </Text>
        <Text style={{color: colors.sub, fontSize: fontSizes.h6}}>
          Website: {website}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Icon
            style={{paddingEnd: 5}}
            name="facebook"
            size={15}
            color={colors.sub}
          />
          <Icon
            style={{paddingEnd: 5}}
            name="instagram"
            size={15}
            color={colors.sub}
          />
          <Icon
            style={{paddingEnd: 5}}
            name="twitter"
            size={15}
            color={colors.sub}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default FoodItem;
