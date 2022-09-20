import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import AdvertismentCard from '../components/AdvertismentCard.component';
import CategoryCard from '../components/CategoryCard.component';
import CustomButton from '../components/CustomButton.component';
import CustomText from '../components/CustomText.component';
import CustomTextInput from '../components/CustomTextInput.component';
import DefaultPadding from '../components/DefaultContainer.component';
import OfferCard from '../components/OfferCard.component';
import PopularDeals from '../components/PopularDeals.component';
import ProductCard from '../components/ProductCard.component';

import CustomTextTypes from '../enums/TextTypes.enum';

import DairyIcon from '../images/DairyIcon.svg';
import FilterIcon from '../images/FilterIcon.svg';
import FishIcon from '../images/FishIcon.svg';
import FruitIcon from '../images/FruitIcon.svg';
import HeartIcon from '../images/HeartIcon.svg';
import MeatIcon from '../images/MeatIcon.svg';
import NotificationIcon from '../images/NotificationIcon.svg';
import SearchIcon from '../images/SearchIcon.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface ProductModel {
  id: number;
  productName: string;
  productRate: string;
  offerPercentage: string;
  offerMessage: string;
  ratingValue?: string;
  ratingCount?: number;
  productImageUrl?: ImageSourcePropType;
}

interface AdvertismentModel {
  id: number;
  imageUrl?: ImageSourcePropType;
  heading: string;
  offerHeading: string;
  offerSubHeading: string;
}

interface CategoryModel {
  id: number;
  categoryName: string;
  itemsCount: number;
}

interface LikedProduct {
  productId: number;
  isProductSelected: boolean;
}

const CategoryData: CategoryModel[] = [
  {
    id: 1,
    categoryName: 'Fruits',
    itemsCount: 1112,
  },
  {
    id: 2,
    categoryName: 'Chicken',
    itemsCount: 112,
  },
  {
    id: 3,
    categoryName: 'Fish',
    itemsCount: 121,
  },
  {
    id: 4,
    categoryName: 'Dairy',
    itemsCount: 100,
  },
  {
    id: 5,
    categoryName: 'Fruits',
    itemsCount: 1000,
  },
  {
    id: 6,
    categoryName: 'Chicken',
    itemsCount: 1112,
  },
  {
    id: 7,
    categoryName: 'Fish',
    itemsCount: 1112,
  },
];

const AdvertismentData: AdvertismentModel[] = [
  {
    id: 1,
    heading: 'FRESH FRUITS',
    offerHeading: '25% OFF',
    offerSubHeading: 'Get 25% off on all fruits*',
    imageUrl: require('../images/Banner.png'),
  },
  {
    id: 2,
    imageUrl: require('../images/Banner.png'),
    heading: 'FRESH FRUITS',
    offerHeading: '25% OFF',
    offerSubHeading: 'Get 25% off on all fruits*',
  },
  {
    id: 3,
    imageUrl: require('../images/Banner.png'),
    heading: 'FRESH FRUITS',
    offerHeading: '25% OFF',
    offerSubHeading: 'Get 25% off on all fruits*',
  },
  {
    id: 4,
    imageUrl: require('../images/Banner.png'),
    heading: 'FRESH FRUITS',
    offerHeading: '25% OFF',
    offerSubHeading: 'Get 25% off on all fruits*',
  },
];

const ProductData: ProductModel[] = [
  {
    id: 1,
    productName: 'Banana',
    productRate: '150',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/BananaImage.png'),
  },
  {
    id: 2,
    productName: 'Tomato',
    productRate: '140',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/TomatoImage.png'),
  },
  {
    id: 3,
    productName: 'Dog Biscuit',
    productRate: '120',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/BiscuitImage.png'),
  },
  {
    id: 4,
    productName: 'Strawberry',
    productRate: '150',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/StrawberryImage.png'),
  },
  {
    id: 5,
    productName: 'Chicken',
    productRate: '150',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/ChickenImage.png'),
  },
  {
    id: 6,
    productName: 'Apple',
    productRate: '100',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/AppleImage.png'),
  },
  {
    id: 7,
    productName: 'Salad',
    productRate: '150',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/SaladImage.png'),
  },
  {
    id: 8,
    productName: 'Strawberry',
    productRate: '150',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/StrawberryImage.png'),
  },
  {
    id: 9,
    productName: 'Banana',
    productRate: '150',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/BananaImage.png'),
  },
  {
    id: 10,
    productName: 'Banana',
    productRate: '150',
    offerPercentage: '5',
    offerMessage: '5% off upto $100',
    ratingValue: '4.5',
    ratingCount: 45,
    productImageUrl: require('../images/BananaImage.png'),
  },
];

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [filteredData, setFilteredData] = useState<ProductModel[]>();
  const [likedProducts, setLikedProducts] = useState<LikedProduct[]>([]);

  const setLikedProductsUI = (item: ProductModel): React.ReactNode => {
    const likedProduct = likedProducts!.find(likedProduct => {
      if (likedProduct.productId === item.id) {
        return likedProduct;
      }
    });

    if (!likedProduct) {
      return <HeartIcon color="#7D8FAB" />;
    }

    if (likedProduct.productId === item.id && !likedProduct.isProductSelected) {
      return <HeartIcon color="#7D8FAB" />;
    }

    if (likedProduct.productId === item.id && likedProduct.isProductSelected) {
      return <HeartIcon color="red" />;
    }
  };

  const renderProductItem = ({item}: {item: ProductModel}) => (
    <View style={{paddingBottom: 20, paddingLeft: 25, paddingRight: 25}}>
      <ProductCard
        onHeartIconPressed={() => {
          let existingLikedProducts = [...likedProducts];
          const likedProduct = existingLikedProducts.find(likedProduct => {
            if (likedProduct.productId === item.id) {
              return likedProduct;
            }
          });

          if (!likedProduct) {
            existingLikedProducts.push({
              isProductSelected: true,
              productId: item.id,
            });
            setLikedProducts(existingLikedProducts);
            return;
          }

          const res = existingLikedProducts.map(x => {
            return x.productId === likedProduct.productId
              ? {
                  isProductSelected: !likedProduct.isProductSelected,
                  productId: item.id,
                }
              : x;
          });
          return setLikedProducts(res);
        }}
        wishlistIcon={setLikedProductsUI(item)}
        productName={item.productName}
        productRate={'150'}
        ratingValue={'4.5'}
        ratingCount={'45'}
        offerView={<OfferCard value={'5% OFF'} />}
        offerString="5% Off upto $100"
        onPress={() => {
          console.log('Click');
        }}
        productImage={
          <Image
            source={item.productImageUrl as ImageSourcePropType}
            style={{width: '100%', height: '100%', borderRadius: 14}}
          />
        }
      />
    </View>
  );

  const renderAdvertismentItem = ({
    item,
    index,
  }: {
    item: AdvertismentModel;
    index: number;
  }) => (
    <View
      style={[
        {
          width: windowWidth - 50,
          height: 130,
        },
        index === 0 ? {marginLeft: 25} : {marginLeft: 0},
        index === AdvertismentData.length - 1
          ? {marginRight: 25, marginLeft: 5}
          : {marginRight: 25},
      ]}>
      <AdvertismentCard
        image={
          <Image
            source={item.imageUrl as ImageSourcePropType}
            style={{borderRadius: 14}}
          />
        }
        heading={item.heading}
        offerHeading={item.offerHeading}
        offerSubHeading={item.offerSubHeading}
        buttonValue={'ORDER NOW'}
      />
    </View>
  );

  const setCategoryIcon = (categoryName: string): React.ReactNode => {
    if (categoryName.toLocaleLowerCase() === 'fruits') {
      return <FruitIcon />;
    }

    if (categoryName.toLocaleLowerCase() === 'chicken') {
      return <MeatIcon />;
    }

    if (categoryName.toLocaleLowerCase() === 'dairy') {
      return <DairyIcon />;
    }

    return <FishIcon />;
  };

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: CategoryModel;
    index: number;
  }) => (
    <View
      style={[
        index === 0 ? {paddingLeft: 25} : {paddingLeft: 0},
        index === CategoryData.length - 1
          ? {paddingRight: 25}
          : {paddingRight: 20},
      ]}>
      <CategoryCard
        categoryName={item.categoryName}
        itemsCount={`${item.itemsCount} Items`}
        categoryIcon={setCategoryIcon(item.categoryName)}
      />
    </View>
  );

  const renderPopularDeals = ({
    item,
    index,
  }: {
    item: ProductModel;
    index: number;
  }) => (
    <View
      style={[
        index === 0 ? {paddingLeft: 25} : {paddingLeft: 0},
        index === ProductData.length - 1
          ? {paddingRight: 25}
          : {paddingRight: 20},
        {width: 272},
      ]}>
      <PopularDeals
        onHeartIconPressed={() => {
          let existingLikedProducts = [...likedProducts];
          const likedProduct = existingLikedProducts.find(likedProduct => {
            if (likedProduct.productId === item.id) {
              return likedProduct;
            }
          });

          if (!likedProduct) {
            existingLikedProducts.push({
              isProductSelected: true,
              productId: item.id,
            });
            setLikedProducts(existingLikedProducts);
            return;
          }

          const res = existingLikedProducts.map(x => {
            return x.productId === likedProduct.productId
              ? {
                  isProductSelected: !likedProduct.isProductSelected,
                  productId: item.id,
                }
              : x;
          });
          return setLikedProducts(res);
        }}
        wishlistIcon={setLikedProductsUI(item)}
        productName={item.productName}
        productRate={item.productRate}
        offerView={<OfferCard value={'5% OFF'} />}
        ratingValue="4.5"
        ratingCount="45"
        productImage={
          <Image
            source={item.productImageUrl as ImageSourcePropType}
            style={{width: '100%', height: '100%', borderRadius: 14}}
          />
        }
      />
    </View>
  );

  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <StatusBar barStyle={'dark-content'} />
      <FlatList
        ListHeaderComponent={
          <View>
            <DefaultPadding style={{paddingBottom: 23}}>
              <View
                style={{
                  paddingBottom: 19,
                  paddingTop: 40,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <CustomText
                    value={'Hello, Brayden'}
                    type={CustomTextTypes.bold_22}
                    style={{lineHeight: 33}}
                  />
                  <CustomText
                    value={'Good morning'}
                    type={CustomTextTypes.regular_14}
                    style={{lineHeight: 21}}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <NotificationIcon />
                  <View
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: 45,
                      marginLeft: 10,
                    }}>
                    <Image
                      source={require('../images/Avatar.png')}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 45,
                      }}
                    />
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <CustomTextInput
                  placeholder="Search"
                  style={{
                    width: 239,
                    height: 54,
                    borderWidth: 1,
                    borderColor: '#E8ECF2',
                  }}
                  leftIcon={<SearchIcon />}
                  backgroundColor="#FFFFFF"
                />
                <View
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: '#E8ECF2',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FilterIcon />
                </View>
              </View>
            </DefaultPadding>

            <View style={{paddingBottom: 39}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={AdvertismentData}
                renderItem={renderAdvertismentItem}
                keyExtractor={(item: AdvertismentModel) => {
                  return item.id.toString();
                }}
              />
            </View>

            <DefaultPadding
              style={[
                {
                  marginBottom: 19,
                },
                styles.flexSpaceBetween,
              ]}>
              <CustomText value={'Categories'} type={CustomTextTypes.bold_22} />
              <CustomButton
                value={'Show all'}
                textType={CustomTextTypes.semi_bold_16}
              />
            </DefaultPadding>

            <View style={{marginBottom: 39}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={CategoryData}
                renderItem={renderCategoryItem}
                keyExtractor={(item: CategoryModel) => {
                  return item.id.toString();
                }}
              />
            </View>

            <DefaultPadding
              style={[{marginBottom: 16}, styles.flexSpaceBetween]}>
              <CustomText
                value={'Popular Deals'}
                type={CustomTextTypes.bold_22}
              />
              <CustomButton
                value={'Show all'}
                textType={CustomTextTypes.semi_bold_16}
              />
            </DefaultPadding>

            <View style={{marginBottom: 42}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={ProductData}
                renderItem={renderPopularDeals}
                keyExtractor={(item: ProductModel) => {
                  return item.id.toString();
                }}
              />
            </View>

            <DefaultPadding>
              <CustomText
                value={'All Grocery'}
                type={CustomTextTypes.bold_22}
                style={{marginBottom: 25}}
              />
            </DefaultPadding>
          </View>
        }
        showsVerticalScrollIndicator={false}
        data={ProductData}
        renderItem={renderProductItem}
        keyExtractor={(item: ProductModel) => {
          return item.id.toString();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
