import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import CustomTextTypes from '../enums/TextTypes.enum';
import CustomText from './CustomText.component';

interface CustomButtonProps {
  value: string;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  style?: ViewStyle;
  textColor?: string | undefined;
  disable?: boolean;
  textType?: CustomTextTypes;
  textStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  value,
  mode,
  onPress,
  style,
  textColor,
  disable,
  textType,
  textStyle,
}) => (
  <Pressable
    onPress={onPress}
    style={[style, {justifyContent: 'center', alignItems: 'center'}]}
    disabled={disable}>
    <CustomText
      value={value}
      type={textType ? textType : CustomTextTypes.extra_bold_16}
      color={textColor}
      style={textStyle}
    />
  </Pressable>
);

export default CustomButton;
