import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getWH } from "../hook/getWH";
import { TextStyle } from "../styles";
import { Button } from "@rneui/themed";

const { width, height } = getWH();

export function Step3({ setStep, point, correct }) {
  return (
    <>
      <View style={{ alignItems: "center", marginTop: width * 0.05 }}>
        <Image source={require("../../assets/Star.png")} />
      </View>
      <Text style={[TextStyle.label, { alignSelf: "center" }]}>
        Bạn được {point} điểm
      </Text>
      <View style={{ justifyContent: "space-evenly", marginTop: 20 }}>
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <View
            style={{
              width: width * 0.45,
              height: height * 0.2,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#87E390",
              borderRadius: 20,
            }}
          >
            <Text style={[TextStyle.label, { color: "#FFFFFF" }]}>
              {correct}
            </Text>
            <Text style={[TextStyle.label, { color: "#FFFFFF" }]}>
              Chính xác{" "}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: width * 0.45,
              backgroundColor: "#EA2F2F",
              borderRadius: 20,
            }}
          >
            <Text style={[TextStyle.label, { color: "#FFFFFF" }]}>
              {10 - correct}
            </Text>
            <Text style={[TextStyle.label, { color: "#FFFFFF" }]}>Sai</Text>
          </View>
        </View>
        <View style={{ marginTop: width * 0.1 }}>
          <Button
            title={"Chọn phép tính"}
            titleStyle={[TextStyle.text, { color: "#3C7363" }]}
            buttonStyle={[styles.button]}
            onPress={() => setStep(0)}
          />
          <Button
            title={"Chọn mức độ"}
            titleStyle={[TextStyle.text, { color: "#3C7363" }]}
            buttonStyle={[styles.button]}
            onPress={() => setStep(0)}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#8FD9C4",
    padding: 16,
    borderRadius: 17,
    alignSelf: "center",
    width: width * 0.7,
    marginVertical: 10,
  },
});
