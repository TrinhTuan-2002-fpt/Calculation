import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getWH } from "../hook/getWH";
import { ButtonNumber } from "./ButtonNumber";
import { Button, LinearProgress, Skeleton } from "@rneui/themed";
import { useEffect, useState } from "react";
import { OPERATORS, OPTIONS } from "../constants/data";
import { TextStyle } from "../styles";
import { randomCalculation } from "../utils/Calculation";
import { ModalAnswerWrong } from "./Toash";

const { width, height } = getWH();

export function Step2({
  reset,
  level,
  operator,
  setStep,
  setPoint,
  setCorrect,
}) {
  const [resultUser, setResultUser] = useState("");
  const [secondNum, setSecondNum] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [question, setQuestion] = useState(1);
  const [math, setMath] = useState(null);
  const [answer, setAnswer] = useState(2);
  const [isAnswerWrong, setIsAnswerWrong] = useState(false);

  const setNumber = (num1, num2) => {
    setFirstNum(num1);
    setSecondNum(num2);
  };

  const calculateFromCalculationObject = () => {
    if (math === OPERATORS.logarit) {
      return Math.pow(firstNum, secondNum);
    } else if (math === OPERATORS.plus) {
      return firstNum + secondNum;
    } else if (math === OPERATORS.minus) {
      return firstNum - secondNum;
    } else if (math === OPERATORS.divide) {
      return firstNum / secondNum;
    } else if (math === OPERATORS.multiply) {
      return firstNum * secondNum;
    } else {
      throw new Error(`Invalid operator: ${math}`);
    }
  };

  useEffect(() => {
    switch (operator) {
      case OPTIONS["Plus or minus"]:
        const plusOrMinus = randomCalculation(level, [
          OPERATORS.plus,
          OPERATORS.minus,
        ]);
        setMath(plusOrMinus.operator);
        setNumber(plusOrMinus.firstNumber, plusOrMinus.secondNumber);
        break;

      case OPTIONS["Multiply or divide"]:
        const multiOrDivd = randomCalculation(level, [
          OPERATORS.multiply,
          OPERATORS.divide,
        ]);
        setMath(multiOrDivd.operator);
        setNumber(multiOrDivd.firstNumber, multiOrDivd.secondNumber);
        break;

      case OPTIONS.Power:
        const power = randomCalculation(level, [OPERATORS.logarit]);
        setMath(power.operator);
        setNumber(power.firstNumber, power.secondNumber);
        break;

      case OPTIONS.Random:
        const calcu = randomCalculation(level, [
          OPERATORS.plus,
          OPERATORS.minus,
          OPERATORS.multiply,
          OPERATORS.divide,
          OPERATORS.logarit,
        ]);
        setMath(calcu.operator);
        setNumber(calcu.firstNumber, calcu.secondNumber);
        break;
      default:
        break;
    }
  }, [question]);

  const handleSubmit = () => {
    const result = calculateFromCalculationObject();
    if (result === Number(resultUser)) {
      if (question === 10) {
        setStep(3);
      }
      setQuestion((per) => per + 1);
      setCorrect((per) => per + 1);
      setPoint((per) => per + 1);
      setResultUser("");
      setAnswer(2);
    } else {
      if (answer === 1) {
        setQuestion((per) => per + 1);
        setPoint((per) => per - 0.5);
        setResultUser("");
        setAnswer(2);
        if (question === 10) {
          setStep(3);
        }
      } else {
        setAnswer((per) => per - 1);
        setResultUser("");
      }
    }
  };

  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   let subs = true;
  //   if (progress < 16 && progress !== 0) {
  //     setTimeout(() => {
  //       if (subs) {
  //         setProgress(progress + 1);
  //       }
  //     }, 1000);
  //   }
  //   return () => {
  //     subs = false;
  //   };
  // }, [progress]);

  return (
    <View style={{ alignSelf: "center" }}>
      <View style={[styles.header]}>
        <TouchableOpacity onPress={reset}>
          <Image
            source={require("../../assets/back.png")}
            style={{ marginRight: 5, width: 35, height: 35 }}
          />
        </TouchableOpacity>
        <Text style={[TextStyle.label]}>Bài học {question}/10</Text>
        <Button onPress={() => setIsAnswerWrong(true)}>test</Button>
      </View>
      <View style={styles.progress}>
        {/* <LinearProgress
          style={{ marginVertical: 10 }}
          value={progress}
          variant="determinate"
        />

        <Button
          disabled={progress > 0}
          onPress={() => {
            setProgress(1);
          }}
          title={"Start Progress"}
          containerStyle={{ margin: 10 }}
        /> */}
      </View>
      <View style={styles.body}>
        <View
          style={{
            width: width * 0.9,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 42, color: "#3C7363" }}>{`${
            firstNum < 0 ? `(${firstNum})` : firstNum
          } ${math} ${secondNum < 0 ? `(${secondNum})` : secondNum} = ${
            resultUser === "" ? ". . . " : resultUser
          }`}</Text>
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => setResultUser(resultUser.slice(0, -1))}
            disabled={resultUser === ""}
          >
            <Image
              source={require("../../assets/delete.png")}
              style={{ width: 42, height: 42 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width * 0.9,
            alignItems: "center",
            paddingVertical: 20,
            borderRadius: 15,
          }}
        >
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
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Button
              title={"-"}
              titleStyle={{ color: "#3C7363", fontSize: 20 }}
              buttonStyle={[styles.button, { width: width * 0.25 }]}
              onPress={() => setResultUser("-")}
              disabled={
                resultUser.charAt(0) === "-" || resultUser.charAt(0) !== ""
              }
            />
            <Button
              title={"0"}
              titleStyle={{ color: "#3C7363", fontSize: 20 }}
              buttonStyle={[
                styles.button,
                { width: width * 0.25, marginHorizontal: 10 },
              ]}
              onPress={() => setResultUser(resultUser + 0)}
            />
            <Button
              title={"="}
              titleStyle={{ color: "#3C7363", fontSize: 20 }}
              buttonStyle={[styles.button, { width: width * 0.25 }]}
              onPress={handleSubmit}
            />
          </View>
        </View>
      </View>
      <ModalAnswerWrong
        isVisible={isAnswerWrong}
        onPress={() => setIsAnswerWrong(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.15,
    justifyContent: "space-between",
  },
  progress: {
    width: width * 0.9,
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "#8FD9C4",
    padding: 16,
    borderRadius: 10,
  },
});
