import { Platform } from "react-native";

export const typography = {
  museoThin: "MuseoSans1",
  museo: "MuseoSans3",
  museoThick: "MuseoSans5",
  museoXThick: "MuseoSans7",
  primary: Platform.select({ ios: "Helvetica", android: "normal" }),
};
