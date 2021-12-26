import React, { FC } from 'react';
import {
  Card as CardMUI,
  CardActions as CardActionsMUI,
  CardContent as CardContentMUI
} from '@mui/material';

import './styles.scss';

export const Card: FC<any>  = (props: any) => {
  const { content, action } = props;
  const childContent = (
    <div className='card'>
      <div className='card-avatar'></div>
      <div className='card-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, animi!</p>
      </div>
    </div>
  )
  return (
    <CardMUI variant="outlined" {...props}>
      <CardContentMUI>
        {content || childContent}
      </CardContentMUI>
      {action && (
        <CardActionsMUI>
          {action}
        </CardActionsMUI>
      )}
    </CardMUI>
  )
}