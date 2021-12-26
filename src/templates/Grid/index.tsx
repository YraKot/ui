import React from 'react';
import {Grid as GridMUI} from '@mui/material';

interface GridProps {
  first?: any;
  second?: any;
  third?: any;
  spacing?: number;
};

export const Grid = ({ first, second, third, spacing=2 }: GridProps) => {
  return (
    <GridMUI container spacing={spacing}>
      <GridMUI item xs={4}>{first}</GridMUI>
      <GridMUI item xs={4}>{second}</GridMUI>
      <GridMUI item xs={4}>{third}</GridMUI>
    </GridMUI>
  );
};
