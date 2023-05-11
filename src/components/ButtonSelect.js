import { Button } from "@rneui/themed";
import { Dimensions, StyleSheet } from "react-native";
import { TextStyle } from "../styles";

const { width } = Dimensions.get("screen");

export function ButtonSelect({ onPress = () => {}, title, style }) {
  return (
    <Button
      title={title}
      titleStyle={[TextStyle.text, { color: "#3C7363" }]}
      buttonStyle={[styles.button, style]}
      onPress={onPress}
    />
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8FD9C4",
    padding: 16,
    borderRadius: 17,
    alignSelf: "center",
    width: width * 0.5,
  },
});
