import * as React from "react";
import {
  Dimensions,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { spacing } from "../../theme";
import { Button, Text } from "..";
import { Article } from "../../models/article/article";
import { useNavigation } from "@react-navigation/native";
import { MockImage } from "../mock-image";
import * as Icons from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  listenToArticleFavourited,
  stopListenToArticleFavourited,
  toggleFavouriteArticle,
} from "../../services/database/articles";

export interface ContentCardProps {
  item: Article;
  index: number;
}

const screenWidth = Math.round(Dimensions.get("window").width);

export const setupArticleFavouriting = (props, favourited, setFavourited) => {
  // setup firebase listener
  useEffect(() => listenToArticleFavourited(props.item.id, updateArticle), []);
  // tear down firebase listener
  useEffect(() => {
    return () => {
      stopListenToArticleFavourited(props.item.id);
    };
  }, []);

  const updateArticle = val => {
    const newVal = val ?? false;
    if (favourited !== newVal) {
      setFavourited(newVal);
    }
  };
};

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function ContentCard(props: ContentCardProps) {
  const { item, index } = props;
  const navigation = useNavigation();
  const openArticle = () =>
    navigation.navigate("ArticleDetail", { item, index });

  const [favourited, setFavourited] = useState(null);
  setupArticleFavouriting(props, favourited, setFavourited);

  return (
    <Button preset={"blank"} style={styles.ROOT} onPress={openArticle}>
      <MockImage width={588} height={200} index={index} style={styles.IMAGE} />
      <View style={styles.TEXT_CONTAINER}>
        <View style={styles.TOP_ROW_CONTAINER}>
          <Text
            preset={"cardHeader"}
            style={styles.TITLE}
            numberOfLines={2}
            capitalise
          >
            {item.title}
          </Text>
          {/* Show icon only if favourited field exists */}
          {typeof favourited === "boolean" && (
            <Icons.AntDesign
              style={styles.FAVOURITE_ICON}
              name={favourited ? "heart" : "hearto"}
              size={20}
              color={"red"}
              onPress={() => toggleFavouriteArticle(item.id)}
            />
          )}
        </View>
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
  TITLE: {
    flex: 1,
  } as TextStyle,
  TEXT_CONTAINER: {
    borderRadius: 8,
    backgroundColor: "#f3f3f3",
    overflow: "hidden",
    padding: spacing[4],
  } as ViewStyle,
  TOP_ROW_CONTAINER: {
    flexDirection: "row",
  } as ViewStyle,
  FAVOURITE_ICON: {
    paddingLeft: 8,
  } as ViewStyle,
};
