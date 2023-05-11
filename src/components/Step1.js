import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonSelect } from "./ButtonSelect";
import { OPTIONS } from "../constants/data";
import { getWH } from "../hook/getWH";
import { TextStyle } from "../styles";

const { width, height } = getWH();

export function Step1({ handleOperator, setStep }) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={setStep}>
            <Image
              source={require("../../assets/back.png")}
              style={{ marginRight: 5, width: 35, height: 35 }}
            />
          </TouchableOpacity>
          <Text style={TextStyle.label}>Chọn lại level</Text>
          <Text></Text>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <ButtonSelect
          title={OPTIONS["Plus or minus"]}
          onPress={() => handleOperator(OPTIONS["Plus or minus"])}
        />
        <ButtonSelect
          title={OPTIONS["Multiply or divide"]}
          style={{ marginVertical: 20 }}
          onPress={() => handleOperator(OPTIONS["Multiply or divide"])}
        />
        <ButtonSelect
          title={OPTIONS.Power}
          onPress={() => handleOperator(OPTIONS.Power)}
        />
        <ButtonSelect
          title={OPTIONS.Random}
          style={{ marginTop: 20 }}
          onPress={() => handleOperator(OPTIONS.Random)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.15,
    justifyContent: "space-around",
  },
});
