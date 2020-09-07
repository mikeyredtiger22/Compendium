import React, { FunctionComponent as Component } from 'react';
import { observer } from 'mobx-react-lite';
import { Text } from '../components/text/text';
import { FlatGrid } from 'react-native-super-grid';
import { Dimensions } from 'react-native';
import { Screen } from '../components/screen/screen';
import { GridCard } from '../components/grid-card/grid-card';
import i18n from 'i18n-js';

const screenWidth = Math.round(Dimensions.get('window').width);

const mockGridData: Array<{ title: string; screenNavigationName?: string }> = [
  { title: i18n.t('gridScreen.form'), screenNavigationName: 'FormDemo' },
  { title: i18n.t('gridScreen.website'), screenNavigationName: 'Website' },
  { title: i18n.t('gridScreen.map'), screenNavigationName: 'Map' },
  { title: 'eCommerce' },
  { title: 'Takeaway' },
  { title: 'Booking' },
  { title: 'Hotel' },
  { title: 'Restaurant' },
  { title: 'Gym' },
  { title: 'Events / Venue' },
  { title: 'Blog / News' },
  { title: 'Job Board' },
  { title: 'Real Estate' },
];

export const GridScreen: Component = observer(function GridScreen() {
  return (
    <Screen preset='scroll'>
      <Text preset='screenTitle' tx='gridScreen.title' />
      <FlatGrid
        scrollEnabled={false}
        fixed={true}
        spacing={GRID_SPACING}
        itemDimension={Math.floor(screenWidth / 2 - 1.5 * GRID_SPACING)}
        data={mockGridData}
        renderItem={({ item, index }) => <GridCard {...item} index={index} />}
        keyExtractor={item => item.title}
      />
    </Screen>
  );
});

const GRID_SPACING = 14;
