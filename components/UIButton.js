import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../constants';
function UIButton(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: isSelected == true ? colors.primary : 'grey',
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white' : null,
      }}>
      <Text
        style={{
          color: isSelected == true ? colors.primary : colors.sub,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton;
