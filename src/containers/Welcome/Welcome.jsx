import React, { memo } from 'react';
import { LinearProgressBase } from '@app/components/LinearProgressBase';

export const Welcome = memo(({ title }) => (
  <>
    <LinearProgressBase />
    <p style={{ margin: '10px 0', textAlign: 'center' }}>{title}</p>
    <LinearProgressBase color="secondary" />
  </>
));
