import { Dimensions } from "react-native";

export function getWH() {
  const { width, height } = Dimensions.get("screen");
  return { width, height };
}
