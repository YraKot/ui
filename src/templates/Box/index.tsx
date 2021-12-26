import React, { FC } from 'react';
import { Box as BoxMUI } from '@mui/material';

export const Box: FC<any> = (props: any) => {
  return (
    <BoxMUI {...props}/>
  );
};