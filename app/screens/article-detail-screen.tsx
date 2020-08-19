import React, { FunctionComponent as Component } from "react";
import { observer } from "mobx-react-lite";
import { ImageStyle, TextStyle } from "react-native";
import { Screen, Text } from "../components";
import { Article } from "../models/article/article";
import { StackScreenProps } from "@react-navigation/stack";
import { PrimaryParamList } from "../navigation";
import { MockImage } from "../components/mock-image";

type Props = StackScreenProps<PrimaryParamList, "ArticleDetail">;

export const ArticleDetailScreen: Component = observer(
  function ArticleDetailScreen(props: Props) {
    const {
      item,
      index,
    }: { item: Article; index?: number } = props.route.params;

    return (
      <Screen preset="scroll">
        <MockImage width={560} height={400} style={IMAGE} index={index} />
        <Text preset="screenTitle" text={item.title} />
        <Text preset="bold" style={CONTENT} text={item.content} />
      </Screen>
    );
  },
);

const IMAGE: ImageStyle = {
  alignSelf: "center",
  width: "100%",
  height: 200,
  borderBottomLeftRadius: 60,
  borderBottomRightRadius: 60,
};
const CONTENT: TextStyle = {
  paddingHorizontal: 20,
};
