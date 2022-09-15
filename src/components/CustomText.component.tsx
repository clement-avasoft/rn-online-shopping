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
        setTextStyle(setStyle(16, '800'));
        break;
      case TextTypes.bold_10:
        setTextStyle(setStyle(10, '700'));
        break;
      case TextTypes.bold_18:
        setTextStyle(setStyle(18, '700'));
        break;
      case TextTypes.bold_22:
        setTextStyle(setStyle(22, '700'));
        break;
      case TextTypes.bold_24:
        setTextStyle(setStyle(24, '700'));
        break;
      case TextTypes.semi_bold_7:
        setTextStyle(setStyle(7, '600'));
        break;
      case TextTypes.semi_bold_12:
        setTextStyle(setStyle(12, '600'));
        break;
      case TextTypes.semi_bold_14:
        setTextStyle(setStyle(14, '600'));
        break;
      case TextTypes.semi_bold_16:
        setTextStyle(setStyle(16, '600'));
        break;
      case TextTypes.semi_bold_18:
        setTextStyle(setStyle(18, '600'));
        break;
      case TextTypes.medium_10:
        setTextStyle(setStyle(10, '500'));
        break;
      case TextTypes.medium_12:
        setTextStyle(setStyle(12, '500'));
        break;
      case TextTypes.medium_16:
        setTextStyle(setStyle(16, '500'));
        break;
      case TextTypes.regular_12:
        setTextStyle(setStyle(12, 'normal'));
        break;
      case TextTypes.regular_14:
        setTextStyle(setStyle(14, 'normal'));
        break;
      case TextTypes.regular_16:
        setTextStyle(setStyle(16, 'normal'));
        break;
    }
  }, [props.type]);

  const setStyle = (fontSize: number, fontWeight: string): TextStyle => {
    let Style = {fontSize: fontSize, fontWeight: fontWeight};
    return Style as TextStyle;
  };

  return (
    <View>
      <View></View>
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
