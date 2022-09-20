import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import CustomTextTypes from '../enums/TextTypes.enum';
import CustomText from './CustomText.component';

interface AdvertismentCardProps {
  image: React.ReactNode;
  backgroundColor?: ColorValue;
  onOrderNowPressed?:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
  heading: string;
  offerHeading: string;
  offerSubHeading: string;
  buttonValue: string;
  buttonColor?: ColorValue;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  style?: StyleProp<ViewStyle>;
}

const AdvertismentCard: React.FC<AdvertismentCardProps> = ({
  image,
  backgroundColor,
  onOrderNowPressed,
  heading,
  offerHeading,
  offerSubHeading,
  buttonValue,
  buttonColor,
  buttonStyle,
  style,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.mainContainer,
        backgroundColor
          ? {backgroundColor: backgroundColor}
          : {backgroundColor: '#FFFFFF'},
        style,
      ]}>
      {image}
      <View style={styles.cardDetails}>
        <CustomText
          value={heading}
          type={CustomTextTypes.semi_bold_14}
          style={{paddingTop: 17, lineHeight: 21}}
        />
        <CustomText
          value={offerHeading}
          type={CustomTextTypes.bold_18}
          style={{paddingTop: 7, lineHeight: 27}}
          color="#FFFFFF"
        />
        <CustomText
          value={offerSubHeading}
          type={CustomTextTypes.semi_bold_12}
          style={{paddingBottom: 7, lineHeight: 18}}
        />
        <Pressable
          onPress={onOrderNowPressed}
          style={[
            styles.orderDetails,
            buttonColor
              ? {backgroundColor: buttonColor}
              : {backgroundColor: '#FF8B38'},
            buttonStyle,
          ]}>
          <CustomText
            value={buttonValue}
            type={CustomTextTypes.semi_bold_7}
            style={{lineHeight: 10}}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 130,
    backgroundColor: 'red',
    borderRadius: 14,
    position: 'relative',
  },
  cardDetails: {
    width: '60%',
    marginLeft: 16,
    height: 130,
    position: 'absolute',
  },
  orderDetails: {
    width: 59,
    height: 18,
    backgroundColor: 'red',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AdvertismentCard;
