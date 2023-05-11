import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getWH } from "../hook/getWH";
import { TextStyle } from "../styles";

export function Step3({ setStep, point, correct }) {
  const { width, height } = getWH();
  return (
    <>
      <View style={{ flex: 1 }}>
        <View
          style={[
            styles.header,
            { paddingTop: height * 0.1, paddingLeft: width * 0.1 },
          ]}
        >
          <TouchableOpacity onPress={() => setStep(0)}>
            <Image
              source={require("../../assets/back.png")}
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
          <Text style={TextStyle.label}>Chọn lại level</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => setStep(1)}>
            <Image
              source={require("../../assets/back.png")}
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
          <Text style={TextStyle.label}>Chọn lại chế độ chơi</Text>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <Text>Ban duoc {point}</Text>
        <Text>Ban dung {correct}</Text>
        <Text>Ban sai {10 - correct}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
});
