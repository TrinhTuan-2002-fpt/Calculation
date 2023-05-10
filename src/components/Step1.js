import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ButtonSelect } from "./ButtonSelect";
import { OPTIONS } from "../constants/data";
import { getWH } from "../hook/getWH";
import { TextStyle } from "../styles";

export function Step1({ handleOperator, setStep }) {
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
          <TouchableOpacity onPress={setStep}>
            <Image
              source={require("../../assets/back.png")}
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
          <Text style={TextStyle.label}>Chọn lại level</Text>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: "center" }}>
        <ButtonSelect
          title={OPTIONS["Plus or minus"]}
          onPress={() => handleOperator(OPTIONS["Plus or minus"])}
        />
        <ButtonSelect
          title={OPTIONS.Multiplication}
          style={{ marginVertical: 20 }}
          onPress={() => handleOperator(OPTIONS.Multiplication)}
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
  },
});
