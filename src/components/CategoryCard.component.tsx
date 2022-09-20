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

interface CategoryCardProps {
  categoryName: string;
  itemsCount: string;
  categoryIcon: React.ReactNode;
  background?: ColorValue | undefined;
  iconBackground?: ColorValue | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  itemsCount,
  categoryIcon,
  background,
  iconBackground,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.mainContainer,
        background
          ? {backgroundColor: background}
          : {backgroundColor: '#FFFFFF'},
      ]}>
      <View
        style={[
          styles.iconContainer,
          iconBackground
            ? {backgroundColor: iconBackground}
            : {backgroundColor: '#FFFFFF'},
        ]}>
        {categoryIcon}
      </View>
      <View>
        <View style={{paddingBottom: 3}}>
          <CustomText
            value={categoryName}
            type={CustomTextTypes.semi_bold_16}
            style={{lineHeight: 22}}
          />
        </View>
        <CustomText
          value={itemsCount}
          type={CustomTextTypes.regular_12}
          style={{lineHeight: 18}}
          color="#7D8FAB"
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: 88,
    height: 142,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 14,
  },
  iconContainer: {
    width: '100%',
    height: 88,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8ECF2',
  },
});

export default CategoryCard;
