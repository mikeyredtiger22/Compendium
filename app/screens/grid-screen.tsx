import React, { FunctionComponent as Component } from 'react';
import { observer } from 'mobx-react-lite';
import { Text } from '../components/text/text';
import { FlatGrid } from 'react-native-super-grid';
import { Dimensions } from 'react-native';
import { Screen } from '../components/screen/screen';
import { GridCard } from '../components/grid-card/grid-card';

const screenWidth = Math.round(Dimensions.get('window').width);

const mockGridData = [
  'Grid 1',
  'Grid 2',
  'Grid 3',
  'Grid 4',
  'Grid 5',
  'Grid 6',
  'Grid 7',
  'Grid 8',
];

export const GridScreen: Component = observer(function GridScreen() {
  return (
    <Screen preset='scroll'>
      <Text preset='screenTitle' tx='gridScreen.title' />
      <FlatGrid
        pointerEvents={'none'}
        scrollEnabled={false}
        fixed={true}
        spacing={GRID_SPACING}
        itemDimension={Math.floor(screenWidth / 2 - 1.5 * GRID_SPACING)}
        data={mockGridData}
        renderItem={({ item, index }) => (
          <GridCard title={item} index={index} />
        )}
        keyExtractor={item => item}
      />
    </Screen>
  );
});

const GRID_SPACING = 14;
