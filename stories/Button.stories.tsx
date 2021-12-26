import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/atoms/Button'

const meta: Meta = {
    title: 'Button',
    component: Button,
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

export const Default = () => <Button></Button>