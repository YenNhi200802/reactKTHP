import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import {image, colors, fontSizes} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodItem from './FoodItem';

function FoodList(props) {
  const [foods, setFoods] = useState([
    {
      name: 'Bánh Macaron Pháp',
      url: 'https://cdn.tgdd.vn/Files/2021/08/31/1379261/top-10-loai-banh-ngot-ngon-noi-tieng-nhat-tren-the-gioi-202108311556384485.jpg',
      status: 'Opening soon',
      price: 134.4,
      website: 'https://anhhoabakery.vn/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/yennhi474/',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      name: 'Bánh Táo Mỹ',
      url: 'https://cdn.tgdd.vn/Files/2021/08/31/1379261/top-10-loai-banh-ngot-ngon-noi-tieng-nhat-tren-the-gioi-202108311557059159.jpg',
      status: 'Comming soon',
      price: 134.4,
      website: 'https://anhhoabakery.vn/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/yennhi474/',
          instagram: 'https://www.instagram.com/',
        },
      ],
    },
    {
      name: 'Bánh Donut Mỹ',
      url: 'https://cdn.tgdd.vn/Files/2021/08/31/1379261/top-10-loai-banh-ngot-ngon-noi-tieng-nhat-tren-the-gioi-202108311557254066.jpg',
      status: 'Comming soon',
      price: 134.4,
      website: 'https://anhhoabakery.vn/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/yennhi474/',
          instagram: 'https://www.instagram.com/',
          twitter: 'https://www.instagram.com/',
        },
      ],
    },
    {
      name: 'Bánh Tiramisu Ý',
      url: 'https://cdn.tgdd.vn/Files/2021/08/31/1379261/top-10-loai-banh-ngot-ngon-noi-tieng-nhat-tren-the-gioi-202108311557498083.jpg',
      status: 'Closing soon',
      price: 134.4,
      website: 'https://anhhoabakery.vn/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/yennhi474/',
        },
      ],
    },
    {
      name: 'Bánh Mochi Nhật Bản',
      url: 'https://cdn.tgdd.vn/Files/2021/08/31/1379261/top-10-loai-banh-ngot-ngon-noi-tieng-nhat-tren-the-gioi-202108311558118672.jpg',
      status: 'Opening now',
      price: 134.4,
      website: 'https://anhhoabakery.vn/',
      socialNetworks: [
        {
          facebook: 'https://www.facebook.com/anhhoabakery.vn/',
          instagram: 'https://www.instagram.com/',
          twitter: 'https://www.instagram.com/',
        },
      ],
    },
  ]);
  const [categories, setCategories] = useState([
    {
      name: 'Pancake',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090934213464.jpg',
    },
    {
      name: 'Muffin',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090934101233.jpg',
    },
    {
      name: 'Su kem',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090933064509.jpg',
    },
    {
      name: 'Cupcake',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090933169585.jpg',
    },
    {
      name: 'Dorayaki',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090933352429.jpg',
    },
    {
      name: 'Muffin',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090934101233.jpg',
    },
    {
      name: 'Tiramisu',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090934310655.jpg',
    },
    {
      name: 'Gato',
      url: 'https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090934465171.jpg',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const filteredFoods = () =>
    foods.filter(eachFood =>
      eachFood.name.toLowerCase().includes(searchText.toLowerCase()),
    );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="search"
            size={20}
            color={colors.primary}
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
            }}
          />
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
            }}
            style={{
              backgroundColor: colors.inactive,
              height: 40,
              flex: 1,
              marginEnd: 8,
              borderRadius: 5,
              opacity: 0.5,
              paddingStart: 10,
            }}
          />
          <Icon name="bars" size={30} color={colors.inactive} />
        </View>
        <View style={{height: 100}}>
          <View style={{height: 1, backgroundColor: colors.sub}} />
          <FlatList
            horizontal={true}
            data={categories}
            keyExtractor={item => item.name}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    alert(`press ${item.name}`);
                  }}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: 'cover',
                      borderRadius: 25,
                      margin: 10,
                    }}
                    source={{
                      uri: item.url,
                    }}
                  />
                  <Text
                    style={{color: colors.sub, fontSize: fontSizes.h6 * 0.8}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            style={{flex: 1}}></FlatList>
          <View style={{height: 1, backgroundColor: colors.sub}} />
        </View>
      </View>
      {filteredFoods().length > 0 ? (
        <FlatList
          data={filteredFoods()}
          renderItem={({item}) => {
            return (
              <FoodItem
                onPress={() => {
                  alert(`Sản phẩm: ${item.name}`);
                }}
                food={item}
                key={item.name}
              />
            );
          }}
          keyExtractor={eachFood => eachFood.name}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: fontSizes.h3}}>
            No food found
          </Text>
        </View>
      )}
    </View>
  );
}
export default FoodList;
