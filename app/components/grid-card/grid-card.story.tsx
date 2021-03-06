import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../storybook/views';
import { GridCard } from './grid-card';

declare let module;

storiesOf('GridCard', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text='Primary' usage='The primary.'>
        <GridCard title='GridCard' index={1} />
      </UseCase>
    </Story>
  ));
