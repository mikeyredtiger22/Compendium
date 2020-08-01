import * as Font from "expo-font";

export const initFonts = async () => {
  await Font.loadAsync({
    MuseoSans1: require("./MuseoSans-100.otf"),
    MuseoSans3: require("./MuseoSans-300.otf"),
    MuseoSans5: require("./MuseoSans-500.otf"),
    MuseoSans7: require("./MuseoSans-700.otf"),
  });
};
