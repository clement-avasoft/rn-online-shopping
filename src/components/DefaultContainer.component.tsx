import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface DefaultPaddingProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const DefaultContainer: React.FC<DefaultPaddingProps> = ({children, style}) => {
  return <View style={[styles.mainContainer, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 25,
    paddingRight: 25,
  },
});

export default DefaultContainer;
