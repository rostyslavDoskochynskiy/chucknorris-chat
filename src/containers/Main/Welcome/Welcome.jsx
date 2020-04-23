import React, { memo } from 'react';
import { LinearProgressBase } from '@app/components/LinearProgressBase';
import { AppText } from '@app/components/ui/AppText';

export const Welcome = memo(({ title }) => (
  <>
    <LinearProgressBase />
    <AppText style={{ margin: '10px 0' }}>{title}</AppText>
    <LinearProgressBase color="secondary" />
  </>
));
