import { View, StyleSheet } from "react-native";
import { ButtonSelect } from "./ButtonSelect";
import { LEVELS } from "../constants/data";
import { TextStyle } from "../styles";
import { Text } from "@rneui/themed";

export function Step0({ handleLevel }) {
  return (
    <>
      <View style={styles.container}>
        <Text onPress={() => setStep(0)} style={[TextStyle.title]}>
          Phép Tính IQ
        </Text>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <ButtonSelect
          title={LEVELS.Easy}
          onPress={() => handleLevel(LEVELS.Easy)}
        />

        <ButtonSelect
          title={LEVELS.Medium}
          onPress={() => handleLevel(LEVELS.Medium)}
          style={{ marginVertical: 20 }}
        />

        <ButtonSelect
          title={LEVELS.Hard}
          onPress={() => handleLevel(LEVELS.Hard)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
