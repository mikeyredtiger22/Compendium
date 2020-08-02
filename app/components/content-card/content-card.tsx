import * as React from "react";
import { Dimensions, ImageStyle, View, ViewStyle } from "react-native";
import { spacing } from "../../theme";
import { Button, Text } from "..";
import { Article } from "../../models/article/article";
import { useNavigation } from "@react-navigation/native";
import { MockImage } from "../mock-image";

export interface ContentCardProps {
  item: Article;
  index: number;
}

const screenWidth = Math.round(Dimensions.get("window").width);

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function ContentCard(props: ContentCardProps) {
  const { item } = props;
  const navigation = useNavigation();
  const openArticle = () => navigation.navigate("ArticleDetail", { item });
  return (
    <Button preset={"blank"} style={styles.ROOT} onPress={openArticle}>
      <MockImage width={588} height={200} style={styles.IMAGE} />
      <View style={styles.TEXT_CONTAINER}>
        <Text preset={"cardHeader"} numberOfLines={2} capitalise>
          {item.title}
        </Text>
        <Text preset={"thin"}>{item.content}</Text>
      </View>
    </Button>
  );
}

const styles = {
  ROOT: {
    backgroundColor: "#f3f3f3",
    borderColor: "#cccccc",
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
  } as ViewStyle,
  IMAGE: {
    alignSelf: "center",
    width: screenWidth - 170,
    height: 100,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  } as ImageStyle,
  TEXT_CONTAINER: {
    borderRadius: 8,
    backgroundColor: "#f3f3f3",
    overflow: "hidden",
    padding: spacing[4],
  } as ViewStyle,
};
