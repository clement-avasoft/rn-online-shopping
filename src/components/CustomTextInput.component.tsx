import React from 'react';
import {
  ColorValue,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextStyle,
  View,
} from 'react-native';

interface CustomTextInputProps {
  onPressIn?: ((e: NativeSyntheticEvent<NativeTouchEvent>) => void) | undefined;
  onChangeText?: (((text: string) => void) & Function) | undefined;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  onBlur?:
    | (((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) &
        ((args: any) => void))
    | undefined;
  onPressOut?:
    | ((e: NativeSyntheticEvent<NativeTouchEvent>) => void)
    | undefined;
  secureTextEntry?: boolean;
  style?: StyleProp<TextStyle>;
  placeholder?: string | undefined;
  placeholderTextColor?: ColorValue | undefined;
  backgroundColor?: ColorValue | undefined;
  value?: string | undefined;
  defaultValue?: string | undefined;
  selectionColor?: string | undefined;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onPressIn,
  onChangeText,
  rightIcon,
  leftIcon,
  onBlur,
  onPressOut,
  secureTextEntry,
  style,
  placeholder,
  placeholderTextColor,
  value,
  defaultValue,
  backgroundColor,
  selectionColor,
}) => {
  return (
    <View
      style={[
        styles.parentContainer,
        backgroundColor
          ? {backgroundColor: backgroundColor}
          : {backgroundColor: '#E8ECF2'},
        style,
      ]}>
      {leftIcon ? <View style={styles.iconAlignment}>{leftIcon}</View> : null}
      <View style={{flex: 10}}>
        <TextInput
          secureTextEntry={secureTextEntry}
          onPressIn={onPressIn}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onPressOut={onPressOut}
          style={[
            styles.textInput,
            backgroundColor
              ? {backgroundColor: backgroundColor}
              : {backgroundColor: '#E8ECF2'},
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          defaultValue={defaultValue}
          selectionColor={selectionColor}
        />
      </View>
      {rightIcon ? <View style={styles.iconAlignment}>{rightIcon}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    borderRadius: 5,
  },
  iconAlignment: {
    flex: 2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
  },
});

export default CustomTextInput;
