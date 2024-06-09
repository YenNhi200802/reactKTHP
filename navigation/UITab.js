import * as React from 'react';
import {Settings, ProductGridView, FoodList} from '../screen';
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
            ? 'align-center'
            : route.name == 'FoodList'
            ? 'accusoft'
            : route.name == 'Settings'
            ? 'cogs'
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
      <Tab.Screen name="ProductGridView" component={ProductGridView} />
      <Tab.Screen name="FoodList" component={FoodList} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default UITab;
