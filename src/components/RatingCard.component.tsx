import React from 'react';
import {View} from 'react-native';
import CustomTextTypes from '../enums/TextTypes.enum';
import CustomText from './CustomText.component';
import StarIcon from '../images/StarIcon.svg';

interface RatingCardProps {
  value: string;
}

const RatingCard: React.FC<RatingCardProps> = ({value}) => {
  return (
    <View
      style={{
        width: 49,
        height: 22,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#B8BBC6',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <StarIcon />
      <CustomText value={value} type={CustomTextTypes.semi_bold_12} />
    </View>
  );
};

export default RatingCard;
