import React, { FunctionComponent as Component } from "react";
import { observer } from "mobx-react-lite";
import { Image, ImageStyle, TextStyle } from "react-native";
import { Screen, Text } from "../components";
import { Article } from "../models/article/article";
import { StackScreenProps } from "@react-navigation/stack";
import { PrimaryParamList } from "../navigation";

const landscape1 = require("../../assets/landscapes/landscape1.jpg");

type Props = StackScreenProps<PrimaryParamList, "ArticleDetail">;

export const ArticleDetailScreen: Component = observer(
  function ArticleDetailScreen(props: Props) {
    const article: Article = props.route.params.item;

    return (
      <Screen preset="scroll">
        <Image source={landscape1} style={IMAGE} />
        <Text preset="screenTitle" text={article.title} />
        <Text preset="bold" style={CONTENT} text={article.content} />
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
