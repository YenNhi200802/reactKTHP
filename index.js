/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Home, Login, Register, Settings} from './screen';
import FoodList from './screen/FoodList/FoodList';
import ProductGridView from './screen/ProductGrid/ProductGridView';
import UITab from './navigation/UITab';
import App from './navigation/App';
import Chat from './screen/chats/Chat';

AppRegistry.registerComponent(appName, () => () => <App />);
