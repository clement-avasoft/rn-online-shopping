import React from 'react';
import {ColorValue, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import CustomTextTypes from '../enums/TextTypes.enum';
import CustomText from './CustomText.component';

interface OfferCardProps {
  value: string;
  textColor?: string;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
}

const OfferCard: React.FC<OfferCardProps> = ({
  value,
  textColor,
  borderColor,
  backgroundColor,
  style,
}) => {
  return (
    <View
      style={[
        styles.mainContainer,
        borderColor ? {borderColor: borderColor} : {borderColor: '#fff'},
        backgroundColor
          ? {backgroundColor: backgroundColor}
          : {backgroundColor: '#FF8B38'},
        style,
      ]}>
      <CustomText
        value={value}
        type={CustomTextTypes.bold_10}
        color={textColor}
        style={{lineHeight: 18}}></CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 69,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
  },
});

export default OfferCard;
