import {ViewStyle} from 'react-native';
import {Button} from 'react-native-paper';

interface CustomButtonProps {
  value: string;
  mode?:
    | 'text'
    | 'outlined'
    | 'contained'
    | 'elevated'
    | 'contained-tonal'
    | undefined;
  onPress?: (() => void) | undefined;
  style?: ViewStyle;
  textColor?: string | undefined;
  disable?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  value,
  mode,
  onPress,
  style,
  textColor,
  disable,
}) => (
  <Button
    mode={mode}
    onPress={onPress}
    style={style}
    textColor={textColor}
    disabled={disable}>
    {value}
  </Button>
);

export default CustomButton;
