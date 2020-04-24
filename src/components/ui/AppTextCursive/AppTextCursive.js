import React from 'react';
import { Text } from './style';

export const AppTextCursive = ({ style, children, titleType }) => (
  <Text style={style} titleType={titleType}>
    {children}
  </Text>
);
