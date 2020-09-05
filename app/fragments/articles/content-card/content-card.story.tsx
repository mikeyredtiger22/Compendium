import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { StoryScreen, Story, UseCase } from '../../../../storybook/views';
import { ContentCard } from './content-card';

declare let module;

storiesOf('ContentCard', module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text='Primary' usage='The primary.'>
        <ContentCard
          index={0}
          item={{
            title: 'Mock title',
            content: 'Mock content',
            image:
              'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=800',
          }}
        />
      </UseCase>
    </Story>
  ));
