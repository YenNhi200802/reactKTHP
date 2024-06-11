import * as React from 'react';
import {Settings, ProductGridView, FoodList, Chat, Profile} from '../screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {fontSizes, colors} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import 'react-native-gesture-handler';
import {useIsFocused} from '@react-navigation/native';
import {ReanimatedKeyframe} from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/animationBuilder/Keyframe';
const Tab = createBottomTabNavigator();
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: 'white',
  tabBarInactiveTintColor: colors.primary,
  tabBarActiveBackgroundColor: colors.primary,
  tabBarInactiveBackgroundColor: colors.inactive,
  tabBarIcon: ({focused, color, size}) => {
    return (
      <Icon
        style={{
          paddingTop: 5,
        }}
        name={
          route.name == 'ProductGridView'
            ? 'tag'
            : route.name == 'FoodList'
            ? 'align-center'
            : route.name == 'Chat'
            ? 'envelope'
            : route.name == 'Settings'
            ? 'cogs'
            : route.name == 'Profile'
            ? 'user-alt'
            : ''
        }
        size={23}
        color={focused ? 'white' : colors.primary}
      />
    );
  },
});
function UITab(props) {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={'ProductGridView'}
        component={ProductGridView}
        options={{tabBarLabel: 'Sản phẩm'}}
      />
      <Tab.Screen
        name="FoodList"
        component={FoodList}
        options={{tabBarLabel: 'Danh mục'}}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{tabBarLabel: 'Chat'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarLabel: 'Cá nhân'}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{tabBarLabel: 'Cài đặt'}}
      />
    </Tab.Navigator>
  );
}
export default UITab;
