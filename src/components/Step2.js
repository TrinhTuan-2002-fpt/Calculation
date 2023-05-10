import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getWH } from "../hook/getWH";
import { ButtonNumber } from "./ButtonNumber";
import { Button } from "@rneui/themed";
import { TextStyle } from "../styles";
import { useState } from "react";

export function Step2({ num1, num2, math, reset, question, setQuestion }) {
  const { width } = getWH();
  const [resultUser, setResultUser] = useState("");
  const [point, setPoint] = useState(0);

  const handleSubmit = () => {
    if (result === Number(resultUser)) {
      setQuestion(question + 1);
      setPoint(point + 1);
      setResultUser("");
    }
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={reset}>
          <Image
            source={require("../../assets/back.png")}
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View
          style={{
            width: width * 0.8,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text>{`${num1 < 0 ? `(${num1})` : num1} ${math} ${
            num2 < 0 ? `(${num2})` : num2
          } = ${resultUser === "" ? ". . . " : resultUser}`}</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => setResultUser(resultUser.slice(0, -1))}
            disabled={resultUser === ""}
          >
            <Image source={require("../../assets/delete.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <ButtonNumber
            value={["7", "8", "9"]}
            setResultUser={setResultUser}
            resultUser={resultUser}
          />
          <ButtonNumber
            value={["4", "5", "6"]}
            setResultUser={setResultUser}
            resultUser={resultUser}
          />
          <ButtonNumber
            value={["1", "2", "3"]}
            setResultUser={setResultUser}
            resultUser={resultUser}
          />
          <View style={{ flexDirection: "row" }}>
            <Button
              title={"-"}
              titleStyle={{ color: "#3C7363" }}
              buttonStyle={[styles.button, { width: width * 0.25 }]}
              onPress={() => setResultUser("-")}
              disabled={
                resultUser.charAt(0) === "-" || resultUser.charAt(0) !== ""
              }
            />
            <Button
              title={"0"}
              titleStyle={{ color: "#3C7363" }}
              buttonStyle={[
                styles.button,
                { width: width * 0.25, marginHorizontal: 10 },
              ]}
              onPress={() => setResultUser(resultUser + 0)}
            />
            <Button
              title={"="}
              titleStyle={{ color: "#3C7363" }}
              buttonStyle={[styles.button, { width: width * 0.25 }]}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {},
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#8FD9C4",
    padding: 16,
    borderRadius: 10,
    alignSelf: "center",
  },
});
