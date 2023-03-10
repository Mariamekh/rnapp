import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconProps} from 'react-native-vector-icons/Icon';
import {CircleBorder} from './CircleBorder';

interface IconCircleProps {
  circleSize: number;
  borderWidth?: number;
  borderColor?: string;
  backgroundColor?: string;
}

export const IconCircle: FC<IconCircleProps & IconProps> = ({
  circleSize,
  borderWidth = 2,
  borderColor = 'black',
  backgroundColor = '#ffffff',
  ...props
}) => (
  <CircleBorder
    size={circleSize}
    borderWidth={borderWidth}
    borderColor={borderColor}
    backgroundColor={backgroundColor}>
    <Icon {...props} />
  </CircleBorder>
);
