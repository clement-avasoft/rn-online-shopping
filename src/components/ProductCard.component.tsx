import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import CustomTextTypes from '../enums/TextTypes.enum';
import OfferTagIcon from '../images/OfferTagIcon.svg';
import CustomText from './CustomText.component';
import RatingCard from './RatingCard.component';

interface ProductCardProps {
  backgroundColor?: ColorValue;
  wishlistIcon: React.ReactNode;
  offerView?: React.ReactNode;
  productName: string;
  ratingValue?: string;
  ratingCount?: string;
  productRate: string;
  offerString?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  onHeartIconPressed?:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
  productImage?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({
  backgroundColor,
  wishlistIcon,
  offerView,
  ratingValue,
  productName,
  ratingCount,
  productRate,
  offerString,
  productImage,
  onPress,
  onHeartIconPressed,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.mainConatiner,
        backgroundColor
          ? {backgroundColor: backgroundColor}
          : {backgroundColor: '#FFFFFF'},
      ]}>
      <View style={styles.productImageMainContainer}>
        <View
          style={[
            styles.productImageSubContainer,
            backgroundColor
              ? {backgroundColor: backgroundColor}
              : {backgroundColor: '#FFFFFF'},
          ]}>
          {productImage ? (
            productImage
          ) : (
            <View style={styles.noImageCenterAlign}>
              <CustomText value={'No Image'} type={CustomTextTypes.bold_10} />
            </View>
          )}
          <View style={styles.heartIconAlignment}>
            <Pressable onPress={onHeartIconPressed}>{wishlistIcon}</Pressable>
          </View>
          <View style={styles.offerViewAlignment}>{offerView}</View>
        </View>
      </View>

      <View style={styles.productDetails}>
        <CustomText
          value={productName}
          type={CustomTextTypes.semi_bold_18}
          color="#303733"
          style={{paddingBottom: 10}}
        />
        <View style={styles.ratingContainer}>
          {ratingValue ? <RatingCard value={ratingValue} /> : null}
          <CustomText
            value={ratingCount ? `${ratingCount} Ratings` : ''}
            type={CustomTextTypes.medium_12}
            style={{paddingLeft: 10}}
            color="#FA662E"
          />
        </View>
        <CustomText
          value={productRate ? `$${productRate}` : ''}
          type={CustomTextTypes.semi_bold_16}
          color="#303733"
          style={{paddingBottom: 18}}
        />
        {offerView ? (
          <>
            <View style={styles.horizontalLine} />
            <View style={styles.offerStringContainer}>
              {offerString ? (
                <>
                  <OfferTagIcon />
                  <CustomText
                    value={offerString}
                    type={CustomTextTypes.medium_10}
                    style={{paddingLeft: 10}}
                  />
                </>
              ) : null}
            </View>
          </>
        ) : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    width: '100%',
    height: 152,
    flexDirection: 'row',
  },
  productImageMainContainer: {
    flex: 1,
  },
  productImageSubContainer: {
    width: 112,
    height: 138,
    borderRadius: 14,
    position: 'relative',
  },
  noImageCenterAlign: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIconAlignment: {
    width: '100%',
    position: 'absolute',
    top: 10,
    left: 76,
  },
  offerViewAlignment: {
    width: '100%',
    position: 'absolute',
    top: 124,
    left: 20,
  },
  productDetails: {paddingLeft: 30, flex: 2},
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#E8ECF2',
  },
  offerStringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default ProductCard;
