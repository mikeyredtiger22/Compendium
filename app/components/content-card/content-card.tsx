import * as React from "react"
import { Dimensions, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { Text } from ".."

const landscape1 = require('../../../assets/landscapes/landscape1.jpg');

export interface ContentCardProps {
  title: string
}

const screenWidth = Math.round(Dimensions.get('window').width);

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function ContentCard(props: ContentCardProps) {
  // grab the props
  const { title } = props

  return (
    <View style={styles.ROOT}>
      <Image source={landscape1} style={styles.IMAGE} />
      <View style={styles.TEXT_CONTAINER}>
        <Text preset={"cardHeader"} numberOfLines={2} capitalise>Stunning Landscape Images</Text>
        <Text preset={"thin"}>Press for more info</Text>
      </View>
    </View>
  )
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
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 8,
  } as ViewStyle,
  IMAGE: {
    alignSelf: "center",
    width: screenWidth - 172,
    height: 100,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  } as ImageStyle,
  TEXT_CONTAINER: {
    overflow: "hidden",
    padding: spacing[4],
  } as ViewStyle
}
