import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import GridItem from './GridItem';

function ProductGridView(props) {
  const [products, setProducts] = useState([
    {
      productName: 'SET MINI OLALA DURIAN',
      url: 'https://product.hstatic.net/200000140863/product/10_2a9bfb72cddc4829ab106eba11b2131a_1024x1024.png',
      price: 239000,
      specifications: [
        'Set 12 bánh sầu riêng thơm phức , Yí-haaaa của nhà Chewy Chewy đã chính thức ra mắt cho các tín đồ.',
      ],
      reviews: 19,
      stars: 5,
    },
    {
      productName: 'SET MINI BINGO',
      url: 'https://product.hstatic.net/200000140863/product/set_mini_bingo_fa3a35ea173d47bfa65423e874cd85a6_1024x1024.png',
      price: 169000,
      specifications: [
        'Set 12 bánh mix giữa 6 bánh nhân vanilla và 6 bánh nhân chocolate thơm ngon tròn vị.Topping creamcheese kèm.',
      ],
      reviews: 120,
      stars: 4,
    },
    {
      productName: 'CHEWY CHOCOLATE',
      url: 'https://product.hstatic.net/200000140863/product/chewy_chocolate_1c72ab08a71e41f494e1da1488e40662_1024x1024.png?crop=1xw:1xh;center,top&resize=768:*',
      price: 25000,
      specifications: ['Bánh su medium nhân chocolate truyền thống'],
      reviews: 146,
      stars: 3,
    },
    {
      productName: 'APPLE CHEESE',
      url: 'https://product.hstatic.net/200000140863/product/apple_cheese_386d0b04ee4948e1b30f3f5227b24e0c_1024x1024.png',
      price: 29000,
      specifications: [
        'Bánh su medium nhân kem vanilla kèm topping phô mai kem mứt táo.',
      ],
      reviews: 546,
      stars: 1,
    },
    {
      productName: 'CHEESE LOVER',
      url: 'https://product.hstatic.net/200000140863/product/cheese_lovver_f0605db955674bc08ab4c9e5a6112a92_1024x1024.png',
      price: 29000,
      specifications: [
        'Bánh su medium nhân kem vanilla kèm topping phô mai kem béo ngậy.',
      ],
      reviews: 66,
      stars: 5,
    },
    {
      productName: 'BLUEBERRY CHEDDARS',
      url: 'https://product.hstatic.net/200000140863/product/blueberry_cheddars_3bf560c4328841939e8e1cfcb5a315f2_1024x1024.png?crop=1xw:1.00xh;center,top&resize=768:*',
      price: 31000,
      specifications: [
        'Bánh su medium nhân kem vanilla kèm topping phô mai sợi mứt việt quất',
      ],
      reviews: 698,
      stars: 3,
    },
    {
      productName: 'BÁNH CUỘN TEX',
      url: 'https://texaschickenvn.com/vnt_upload/product/07_2022/Banh_cuon_Tex.png?crop=1xw:0.972xh;center,top&resize=768:*',
      price: 59000,
      specifications: [
        'Bánh cuộn Tex ( lựa chọn vị cay/ không cay)',
        'Tương ớt + 1 Tương cà',
      ],
      reviews: 223,
      stars: 1,
    },
    {
      productName: 'Cupcake ',
      url: 'https://cdn.tgdd.vn/Files/2022/03/18/1420984/cach-lam-banh-cupcake-de-thuong-vo-cung-don-gian-tai-nha-202203180749436765.jpg?crop=1xw:1.00xh;center,top&resize=768:*',
      price: 39000,
      specifications: [
        'Bánh có vị ngọt nhẹ nhàng, hương thơm của bơ và trứng cùng với một chút vị béo của kem sẽ là một sự kết hợp vô cùng đặc biệt.',
      ],
      reviews: 325,
      stars: 3,
    },
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        style={{marginTop: 5}}
        data={products}
        numColumns={2}
        keyExtractor={item => item.productName}
        renderItem={({item, index}) => (
          <GridItem
            item={item}
            index={index}
            onPress={() => {
              let clonedProducts = products.map(eachProduct => {
                if (item.productName == eachProduct.productName) {
                  //return {...eachProduct, isSaved: true}
                  return {
                    ...eachProduct,
                    isSaved:
                      eachProduct.isSaved == false ||
                      eachProduct.isSaved == undefined
                        ? true
                        : false,
                  };
                }
                return eachProduct;
              });
              setProducts(clonedProducts);
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}
export default ProductGridView;
