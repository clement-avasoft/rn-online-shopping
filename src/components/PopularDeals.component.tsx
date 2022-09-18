import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import CustomTextTypes from '../enums/TextTypes.enum';
import CustomText from './CustomText.component';
import RatingCard from './RatingCard.component';

interface PopularDealsProps {
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

const PopularDeals: React.FC<PopularDealsProps> = ({
  productImage,
  onPress,
  onHeartIconPressed,
  wishlistIcon,
  offerView,
  ratingValue,
  ratingCount,
  productName,
  productRate,
  backgroundColor,
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
      <View
        style={[
          styles.productImageMainContainer,
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

      <View>
        <CustomText
          value={productName}
          type={CustomTextTypes.semi_bold_18}
          color="#303733"
          style={{paddingTop: 20}}
        />
        <View style={styles.bottomContainer}>
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
          />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainConatiner: {
    width: '100%',
    height: 289,
  },
  productImageMainContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
    borderRadius: 14,
  },
  noImageCenterAlign: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIconAlignment: {
    position: 'absolute',
    top: 18,
    right: 20,
  },
  offerViewAlignment: {
    position: 'absolute',
    top: 13,
    left: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 18,
  },
});

export default PopularDeals;
