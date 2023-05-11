import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";

const { width } = Dimensions.get("screen");

export function ButtonNumber({ value, setResultUser, resultUser }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {value.map((v, i) => {
        return (
          <Button
            title={v}
            key={i}
            titleStyle={{ color: "#3C7363", fontSize: 20 }}
            buttonStyle={[
              styles.button,
              { marginHorizontal: i === 1 ? 10 : 0, marginVertical: 5 },
            ]}
            onPress={() => setResultUser(resultUser + v)}
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#8FD9C4",
    padding: 16,
    borderRadius: 10,
    alignSelf: "center",
    width: width * 0.25,
  },
});
