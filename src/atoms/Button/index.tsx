import React, { FC } from 'react';
import { Button as ButtonMUI } from '@mui/material';

export const Button: FC<any> = (props: any) => {
  const { text = 'click me', variant = 'text' } = props;
  return (
    <ButtonMUI variant={variant} {...props}>{text}</ButtonMUI>
  );
};