import React, {useEffect, useState} from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';

import TextTypes from '../enums/TextTypes.enum';

interface TextProps {
  value: string | number;
  type: TextTypes;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const CustomText: React.FC<TextProps> = props => {
  let [textStyle, setTextStyle] = useState<TextStyle>();

  useEffect(() => {
    switch (props.type) {
      case TextTypes.extra_bold_16:
        setTextStyle(setStyle(16, 'ExtraBold'));
        break;
      case TextTypes.bold_10:
        setTextStyle(setStyle(10, 'Poppins-Bold'));
        break;
      case TextTypes.bold_18:
        setTextStyle(setStyle(18, 'Poppins-Bold'));
        break;
      case TextTypes.bold_22:
        setTextStyle(setStyle(22, 'Poppins-Bold'));
        break;
      case TextTypes.bold_24:
        setTextStyle(setStyle(24, 'Poppins-Bold'));
        break;
      case TextTypes.semi_bold_7:
        setTextStyle(setStyle(7, 'Poppins-SemiBold'));
        break;
      case TextTypes.semi_bold_12:
        setTextStyle(setStyle(12, 'Poppins-SemiBold'));
        break;
      case TextTypes.semi_bold_14:
        setTextStyle(setStyle(14, 'Poppins-SemiBold'));
        break;
      case TextTypes.semi_bold_16:
        setTextStyle(setStyle(16, 'Poppins-SemiBold'));
        break;
      case TextTypes.semi_bold_18:
        setTextStyle(setStyle(18, 'Poppins-SemiBold'));
        break;
      case TextTypes.medium_10:
        setTextStyle(setStyle(10, 'Poppins-Medium'));
        break;
      case TextTypes.medium_12:
        setTextStyle(setStyle(12, 'Poppins-Medium'));
        break;
      case TextTypes.medium_16:
        setTextStyle(setStyle(16, 'Poppins-Medium'));
        break;
      case TextTypes.regular_12:
        setTextStyle(setStyle(12, 'Poppins-Regular'));
        break;
      case TextTypes.regular_14:
        setTextStyle(setStyle(14, 'Poppins-Regular'));
        break;
      case TextTypes.regular_16:
        setTextStyle(setStyle(16, 'Poppins-Regular'));
        break;
    }
  }, [props.type]);

  const setStyle = (fontSize: number, fontFamily: string): TextStyle => {
    let Style = {
      fontSize: fontSize,
      fontFamily: fontFamily,
    };
    return Style as TextStyle;
  };

  return (
    <View>
      <Text
        style={[
          textStyle,
          {color: props.color !== undefined ? props.color : 'black'},
          props.style,
        ]}>
        {props.value}
      </Text>
    </View>
  );
};

export type {TextProps};

export default CustomText;
