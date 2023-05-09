import { Button, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Levels, Operators, Options } from "./src/constants/data";

const { width, height } = Dimensions.get("screen");

export default function App() {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState(null);
  const [operator, setOperator] = useState(null);
  const [math, setMath] = useState(null);
  const [question, setQuestion] = useState(null);
  const [point, setPoint] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [resultUser, setResultUser] = useState("");

  const newNumberEasy = () => Math.floor(Math.random() * 18) - 9;
  const newNumberFit = () =>
    Math.random() < 0.5
      ? Math.floor(Math.random() * 20) + 10
      : Math.floor(Math.random() * 20) - 30;

  const setNumber = (num1, num2) => {
    setNum1(num1);
    setNum2(num2);
  };

  const getRandomDivision = () => {
    if (level === Levels.Dễ) {
      const tempNum1 = newNumberEasy();
      const tempNum2 =
        Math.random() < 0.5
          ? Math.floor(Math.random() * 8) + 1
          : Math.floor(Math.random() * 9) - 10;
      const result = Math.floor(tempNum1 / tempNum2);
      return { tempNum1, tempNum2, result };
    }

    if (level === Levels.Vừa) {
      const tempNum1 = newNumberEasy();
      const tempNum2 =
        Math.random() < 0.5
          ? Math.floor(Math.random() * 20) + 10
          : Math.floor(Math.random() * 20) - 30;
      const result = Math.floor(tempNum1 / tempNum2);
      return { tempNum1, tempNum2, result };
    }
  };

  useEffect(() => {
    switch (level) {
      case Levels.Dễ:
        if (operator === Options["Cộng Trừ"]) {
          const tempMath = Math.random() < 0.5 ? "+" : "-";
          const tempNum1 = newNumberEasy();
          const tempNum2 = newNumberEasy();
          setNumber(tempNum1, tempNum2);
          setMath(tempMath);
          if (tempMath === "+") {
            setResult(tempNum1 + tempNum2);
          } else {
            setResult(tempNum1 - tempNum2);
          }
        }

        if (operator === Options["Nhân Chia"]) {
          const tempMath = Math.random() < 0.5 ? "x" : "÷";
          setMath(tempMath);
          if (tempMath === "x") {
            const tempNum1 = newNumberEasy();
            const tempNum2 = newNumberEasy();
            setNumber(tempNum1, tempNum2);
            setResult(tempNum1 * tempNum2);
          } else {
            const store = getRandomDivision();
            setNum1(store.tempNum1);
            setNum2(store.tempNum2);
            setResult(store.result);
          }
        }

        if (operator === Options["Luỹ Thừa"]) {
          const tempNum1 =
            Math.random() < 0.5
              ? Math.floor(Math.random() * 8) + 1
              : Math.floor(Math.random() * 9) - 10;
          setNum1(tempNum1);
          setNum2(2);
          setMath("^");
          setResult(tempNum1 ** 2);
        }

        if (operator === Options["Tổng Hợp"]) {
          const tempMath = Operators[Math.floor(Math.random() * 5)];
          const tempNum1 = newNumberEasy();
          const tempNum2 = newNumberEasy();
          setMath(tempMath);

          switch (tempMath) {
            case "+":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 + tempNum2);
              break;
            case "-":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 - tempNum2);
              break;
            case "x":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 * tempNum2);
              break;
            case "÷":
              const store = getRandomDivision();
              setNum1(store.tempNum1);
              setNum2(store.tempNum2);
              setResult(store.result);
              break;
            case "^":
              setNumber(tempNum1, 2);
              setResult(tempNum1 ** 2);
              break;
            default:
              break;
          }
        }
        break;
      case Levels.Vừa:
        if (operator === Options["Cộng Trừ"]) {
          const tempMath = Math.random() < 0.5 ? "+" : "-";
          const tempNum1 = newNumberFit();
          const tempNum2 = newNumberEasy();
          setNumber(tempNum1, tempNum2);
          setMath(tempMath);
          if (tempMath === "+") {
            setResult(tempNum1 + tempNum2);
          } else {
            setResult(tempNum1 - tempNum2);
          }
        }

        if (operator === Options["Nhân Chia"]) {
          const tempMath = Math.random() < 0.5 ? "x" : "÷";
          setMath(tempMath);
          if (tempMath === "x") {
            const tempNum1 = newNumberFit();
            const tempNum2 = newNumberEasy();
            setNumber(tempNum1, tempNum2);
            setResult(tempNum1 * tempNum2);
          } else {
            const store = getRandomDivision();
            setNum1(store.tempNum1);
            setNum2(store.tempNum2);
            setResult(store.result);
          }
        }

        if (operator === Options["Luỹ Thừa"]) {
          const tempNum1 = newNumberFit();
          setNum1(tempNum1);
          setNum2(2);
          setMath("^");
          setResult(tempNum1 ** 2);
        }

        if (operator === Options["Tổng Hợp"]) {
          const tempMath = Operators[Math.floor(Math.random() * 5)];
          const tempNum1 = newNumberFit();
          const tempNum2 = newNumberEasy();
          setMath(tempMath);

          switch (tempMath) {
            case "+":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 + tempNum2);
              break;
            case "-":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 - tempNum2);
              break;
            case "x":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 * tempNum2);
              break;
            case "÷":
              const store = getRandomDivision();
              setNum1(store.tempNum1);
              setNum2(store.tempNum2);
              setResult(store.result);
              break;
            case "^":
              setNumber(tempNum1, 2);
              setResult(tempNum1 ** 2);
              break;
            default:
              break;
          }
        }
        break;
      case Levels.Khó:
        if (operator === Options["Cộng Trừ"]) {
          const tempMath = Math.random() < 0.5 ? "+" : "-";
          const tempNum1 = newNumberFit();
          const tempNum2 = newNumberFit();
          setNumber(tempNum1, tempNum2);
          setMath(tempMath);
          if (tempMath === "+") {
            setResult(tempNum1 + tempNum2);
          } else {
            setResult(tempNum1 - tempNum2);
          }
        }

        if (operator === Options["Nhân Chia"]) {
          const tempMath = Math.random() < 0.5 ? "x" : "÷";
          setMath(tempMath);
          if (tempMath === "x") {
            const tempNum1 = newNumberFit();
            const tempNum2 = newNumberFit();
            setNumber(tempNum1, tempNum2);
            setResult(tempNum1 * tempNum2);
          } else {
            const store = getRandomDivision();
            setNum1(store.tempNum1);
            setNum2(store.tempNum2);
            setResult(store.result);
          }
        }

        if (operator === Options["Luỹ Thừa"]) {
          const tempNum1 = newNumberFit();
          setNum1(tempNum1);
          setNum2(3);
          setMath("^");
          setResult(tempNum1 ** 3);
        }

        if (operator === Options["Tổng Hợp"]) {
          const tempMath = Operators[Math.floor(Math.random() * 5)];
          const tempNum1 = newNumberFit();
          const tempNum2 = newNumberFit();
          setMath(tempMath);

          switch (tempMath) {
            case "+":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 + tempNum2);
              break;
            case "-":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 - tempNum2);
              break;
            case "x":
              setNumber(tempNum1, tempNum2);
              setResult(tempNum1 * tempNum2);
              break;
            case "÷":
              const store = getRandomDivision();
              setNum1(store.tempNum1);
              setNum2(store.tempNum2);
              setResult(store.result);
              break;
            case "^":
              setNumber(tempNum1, 3);
              setResult(tempNum1 ** 3);
              break;
            default:
              break;
          }
        }
        break;
      default:
        break;
    }
  }, [step === 2, question]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        resizeMode="cover"
        style={{ width, height }}
      >
        <StatusBar barStyle={"dark-content"} />
        {step === 0 && (
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title={Levels[0]}
              titleStyle={{ color: "#3C7363" }}
              buttonStyle={[styles.button, { width: width * 0.8 }]}
              onPress={() => {
                setStep(1);
                setLevel(Levels.Dễ);
              }}
            />
            <Button
              title={Levels[1]}
              titleStyle={{ color: "#3C7363" }}
              buttonStyle={[
                styles.button,
                { width: width * 0.8, marginVertical: 20 },
              ]}
              onPress={() => {
                setStep(1);
                setLevel(Levels.Vừa);
              }}
            />
            <Button
              title={Levels[2]}
              titleStyle={{ color: "#3C7363" }}
              buttonStyle={[styles.button, { width: width * 0.8 }]}
              onPress={() => {
                setStep(1);
                setLevel(Levels.Khó);
              }}
            />
          </View>
        )}
        {/* style={{ color: "#FFFF" }}  */}
        {step === 1 && (
          <>
            <Text onPress={() => setStep(0)}>{"< Chọn mức độ"}</Text>
            <View
              style={{
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                title={Options[0]}
                titleStyle={{ color: "#3C7363" }}
                buttonStyle={[styles.button, { width: width * 0.8 }]}
                onPress={() => {
                  setStep(2);
                  setOperator(Options["Cộng Trừ"]);
                }}
              />
              <Button
                title={Options[1]}
                titleStyle={{ color: "#3C7363" }}
                buttonStyle={[
                  styles.button,
                  { width: width * 0.8, marginVertical: 20 },
                ]}
                onPress={() => {
                  setStep(2);
                  setOperator(Options["Nhân Chia"]);
                }}
              />
              <Button
                title={Options[2]}
                titleStyle={{ color: "#3C7363" }}
                buttonStyle={[styles.button, { width: width * 0.8 }]}
                onPress={() => {
                  setStep(2);
                  setOperator(Options["Luỹ Thừa"]);
                }}
              />
              <Button
                title={Options[3]}
                titleStyle={{ color: "#3C7363" }}
                buttonStyle={[
                  styles.button,
                  { width: width * 0.8, marginTop: 20 },
                ]}
                onPress={() => {
                  setStep(2);
                  setOperator(Options["Tổng Hợp"]);
                }}
              />
            </View>
          </>
        )}
        {step === 2 && (
          <>
            <Text onPress={() => setStep(0)}>Kết thúc </Text>
            <View style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  paddingVertical: 50,
                  width: width * 0.8,
                  alignItems: "center",
                }}
              >
                <Text>{`${num1 < 0 ? `(${num1})` : num1} ${math} ${
                  num2 < 0 ? `(${num2})` : num2
                } = ${resultUser}`}</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                {["7", "8", "9"].map((v, i) => (
                  <Button
                    title={v}
                    key={i}
                    titleStyle={{ color: "#3C7363" }}
                    buttonStyle={[styles.button, { width: width * 0.25 }]}
                    onPress={() => setResultUser(resultUser + v)}
                  />
                ))}
              </View>
              <View style={{ flexDirection: "row" }}>
                {["4", "5", "6"].map((v, i) => (
                  <Button
                    title={v}
                    key={i}
                    titleStyle={{ color: "#3C7363" }}
                    buttonStyle={[styles.button, { width: width * 0.25 }]}
                    onPress={() => setResultUser(resultUser + v)}
                  />
                ))}
              </View>
              <View style={{ flexDirection: "row" }}>
                {["1", "2", "3"].map((v, i) => (
                  <Button
                    title={v}
                    key={i}
                    titleStyle={{ color: "#3C7363" }}
                    buttonStyle={[styles.button, { width: width * 0.25 }]}
                    onPress={() => setResultUser(resultUser + v)}
                  />
                ))}
              </View>
              <View style={{ flexDirection: "row" }}>
                {/* {["Xoa", "0", "="].map((v, i) => (
                  
                ))} */}
                <Button
                  title={"Xóa"}
                  titleStyle={{ color: "#3C7363" }}
                  buttonStyle={[styles.button, { width: width * 0.25 }]}
                />
                <Button
                  title={"0"}
                  titleStyle={{ color: "#3C7363" }}
                  buttonStyle={[styles.button, { width: width * 0.25 }]}
                  onPress={() => setResultUser(resultUser + 0)}
                />
                <Button
                  title={"="}
                  titleStyle={{ color: "#3C7363" }}
                  buttonStyle={[styles.button, { width: width * 0.25 }]}
                />
              </View>
            </View>
          </>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#8FD9C4",
    padding: 16,
    borderRadius: 17,
    alignSelf: "center",
  },
});
