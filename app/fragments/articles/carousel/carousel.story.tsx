import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../../storybook/views';
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
              title: 'Article 1: Stunning Landscape Images',
              content: 'Press for more info',
              imageUrl:
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=800',
            },
            {
              title: 'Article 2: Stunning Landscape Images',
              content: 'Press for more info',
              imageUrl:
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=800',
            },
            {
              title: 'Article 3: Stunning Landscape Images',
              content: 'Press for more info',
              imageUrl:
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=800',
            },
            {
              title: 'Article 4: Stunning Landscape Images',
              content: 'Press for more info',
              imageUrl:
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=800',
            },
            {
              title: 'Article 5: Stunning Landscape Images',
              content: 'Press for more info',
              imageUrl:
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=800',
            },
          ]}
        />
      </UseCase>
    </Story>
  ));
