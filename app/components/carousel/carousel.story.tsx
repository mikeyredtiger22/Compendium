import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../storybook/views';
import { Carousel } from './carousel';

declare let module;

storiesOf('Carousel', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text='Primary' usage='The primary.'>
        <Carousel
          data={[
            {
              id: '1',
              title: 'Article 1: Stunning Landscape Images',
              content: 'Press for more info',
            },
            {
              id: '2',
              title: 'Article 2: Stunning Landscape Images',
              content: 'Press for more info',
            },
            {
              id: '3',
              title: 'Article 3: Stunning Landscape Images',
              content: 'Press for more info',
            },
            {
              id: '4',
              title: 'Article 4: Stunning Landscape Images',
              content: 'Press for more info',
            },
            {
              id: '5',
              title: 'Article 5: Stunning Landscape Images',
              content: 'Press for more info',
            },
          ]}
        />
      </UseCase>
    </Story>
  ));
