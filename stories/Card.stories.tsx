import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card } from '../src/molecules/Card'

const meta: Meta = {
    title: 'Card',
    component: Card,
    argTypes: {
      children: {
        control: {
          type: 'text',
        },
      },
    },
    parameters: {
      controls: { expanded: true },
    },
  };

export default meta;

export const Default = () => <Card>simple card</Card>