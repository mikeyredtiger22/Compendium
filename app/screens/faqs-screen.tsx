import React, { FunctionComponent as Component, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Text } from '../components/text/text';
import { Screen } from '../components/screen/screen';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { defaultShadow } from '../theme/shadow';
import { Button } from '../components/button/button';

export const FaqsScreen: Component = observer(function ContentScreen() {
  return (
    <Screen preset='fixed'>
      <Text preset='screenSubtitle' tx={'faqsScreen.title'} />
      <Faq question={'How do you make an FAQ?'} answer={'Like This!'} />
      <Faq
        question={
          'How do you make an FAQ? How do you make an FAQ? How do you make an FAQ? How do you make an FAQ?'
        }
        answer={
          'Like This! How do you make an FAQ? How do you make an FAQ? How do you make an FAQ? '
        }
      />
    </Screen>
  );
});

// TODO MOVE to components & add story file
function Faq(props: { question: string; answer: string }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Button
      preset='blank'
      style={CONTAINER}
      onPress={() => {
        setShowAnswer(!showAnswer);
      }}
    >
      <View style={TOP_ROW}>
        <Text
          preset='thickSubtitle'
          style={QUESTION}
          numberOfLines={2}
          text={props.question}
        />
        <Entypo
          name={showAnswer ? 'chevron-up' : 'chevron-down'}
          size={30}
          color='black'
        />
      </View>
      {showAnswer && <Text style={ANSWER} text={props.answer} />}
    </Button>
  );
}

const CONTAINER: ViewStyle = {
  borderWidth: StyleSheet.hairlineWidth,
  borderRadius: 10,
  padding: 10,
  margin: 10,
  ...defaultShadow,
};
const TOP_ROW: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};
const QUESTION: TextStyle = {
  flex: 1,
};
const ANSWER: TextStyle = {
  marginTop: 10,
};
