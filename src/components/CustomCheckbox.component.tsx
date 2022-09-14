import CheckBox from '@react-native-community/checkbox';
import {StyleProp, ViewStyle} from 'react-native';

interface CustomCheckboxProps {
  disabled?: boolean;
  value: boolean;
  onValueChange?: ((value: boolean) => void) | undefined;
  style?: StyleProp<ViewStyle>;
  tintColors?:
    | {
        true?: any;
        false?: any;
      }
    | undefined;
  tintColor?: string | undefined;
  onFillColor?: string | undefined;
  onTintColor?: string | undefined;
  onCheckColor?: string | undefined;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  value,
  disabled,
  onValueChange,
  style,
  tintColors,
  tintColor,
  onFillColor,
  onTintColor,
  onCheckColor,
}) => {
  return (
    <CheckBox
      disabled={disabled}
      value={value}
      onValueChange={onValueChange}
      style={style}
      tintColors={tintColors}
      tintColor={tintColor}
      onTintColor={onTintColor}
      onFillColor={onFillColor}
      onCheckColor={onCheckColor}
    />
  );
};

export default CustomCheckbox;
