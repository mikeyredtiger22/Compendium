import * as React from "react";
import {
  ImageBackground,
  ImageStyle,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { color, typography } from "../../theme";
import { Button, Text } from "..";

export interface GridCardProps {
  title: string;
}

export function GridCard(props: GridCardProps) {
  const { title } = props;
  // const navigation = useNavigation()
  // const openGridItem = () => navigation.navigate("GridScreen", { title })
  return (
    <Button preset={"blank"} style={styles.ROOT} /* onPress={openGridItem} */>
      <ImageBackground
        source={{ uri: "http://placeimg.com/370/370/nature" }}
        style={styles.IMAGE}
        imageStyle={styles.IMAGE}
      >
        <View style={styles.TEXT_CONTAINER}>
          <Text
            preset={"cardHeader"}
            style={styles.TEXT}
            numberOfLines={2}
            capitalise
          >
            {title}
          </Text>
        </View>
      </ImageBackground>
    </Button>
  );
}

const styles = {
  ROOT: {
    aspectRatio: 1,
    backgroundColor: "#f3f3f3",
    borderColor: "#cccccc",
    borderRadius: 8,
    borderWidth: 0.5,
    elevation: 15,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
  } as ViewStyle,
  IMAGE: {
    borderRadius: 7,
    width: "100%",
    height: "100%",
  } as ImageStyle,
  TEXT_CONTAINER: {
    justifyContent: "flex-end",
    flex: 1,
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
  } as ViewStyle,
  TEXT: {
    fontSize: 18,
    fontFamily: typography.museoXThick,
    fontWeight: "bold",
    color: color.palette.white,
    textShadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  } as TextStyle,
};
