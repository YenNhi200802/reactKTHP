/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Home, Login, Register} from './screen';
import FoodList from './screen/FoodList/FoodList';
import ProductGridView from './screen/ProductGrid/ProductGridView';

AppRegistry.registerComponent(appName, () => () => <ProductGridView />);
