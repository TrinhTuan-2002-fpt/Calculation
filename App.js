import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LEVELS, OPERATORS, OPTIONS } from "./src/constants/data";
import { Step1 } from "./src/components/Step1";
import { Step0 } from "./src/components/Step0";
import { Step2 } from "./src/components/Step2";

const { width, height } = Dimensions.get("screen");

export default function App() {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState(null);
  const [operator, setOperator] = useState(null);
  const [math, setMath] = useState(null);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [question, setQuestion] = useState(1);

  const randomUnitsDigit = () => Math.floor(Math.random() * 18) - 9;

  const randomTensDigit = () =>
    Math.random() < 0.5
      ? Math.floor(Math.random() * 20) + 10
      : Math.floor(Math.random() * 20) - 30;

  const setNumber = (num1, num2) => {
    setFirstNum(num1);
    setSecondNum(num2);
  };

  const randomValueFromArray = (values) => {
    const keys = Object.keys(values);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return values[randomKey];
  };

  const findModulos = (number) => {
    const absNum = Math.abs(number);

    if (absNum === 1 || absNum === 0) {
      return [1];
    }

    const modulos = [];
    for (let i = 2; i <= absNum; i++) {
      if (number % i === 0) {
        modulos.push(i);
      }
    }

    return modulos.reduce((acc, curr, idx) => {
      acc.push(...[-curr, curr]);

      return acc;
    }, []);
  };

  const handleLevel = (level) => {
    setStep(1);
    setLevel(level);
  };

  const handleOperator = (option) => {
    setStep(2);
    setOperator(option);
  };

  const reset = () => {
    setStep(1);
    setResultUser("");
  };

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const randomCalculation = (level) => {
    const operator = randomValueFromArray(OPERATORS);
    setMath(operator);
    let firstNumber, secondNumber;

    if (operator === OPERATORS.logarit) {
      switch (level) {
        case LEVELS.Easy:
          firstNumber = randomUnitsDigit();
          secondNumber = 2;
          break;
        case LEVELS.Math:
          firstNumber = randomTensDigit();
          secondNumber = 2;
          break;
        case LEVELS.Hard:
          firstNumber = randomUnitsDigit();
          secondNumber = 3;
          break;

        default:
          break;
      }
    } else if (operator === OPERATORS.divide) {
      const calculation = findDive();
      firstNumber = calculation.firstNumber;
      secondNumber = calculation.secondNumber;
    } else {
      switch (level) {
        case LEVELS.Easy:
          firstNumber = randomUnitsDigit();
          secondNumber = randomUnitsDigit();
          break;
        case LEVELS.Medium:
          firstNumber = randomTensDigit();
          secondNumber = randomUnitsDigit();
          break;
        case LEVELS.Hard:
          firstNumber = randomTensDigit();
          secondNumber = randomTensDigit();
          break;

        default:
          break;
      }
    }

    setNumber(firstNumber, secondNumber);

    return {
      firstNumber,
      secondNumber,
      operator,
    };
  };

  const findDive = () => {
    let modulos, firstNumber, secondNumber;

    switch (level) {
      case LEVELS.Easy:
        firstNumber = randomUnitsDigit();
        modulos = findModulos(firstNumber);
        secondNumber = randomValueFromArray(modulos);

        while (Math.abs(secondNumber) >= 10) {
          secondNumber = randomValueFromArray(modulos);
        }
        break;

      case LEVELS.Medium:
        firstNumber = randomTensDigit();
        modulos = findModulos(firstNumber);
        secondNumber = randomValueFromArray(modulos);
        break;

      case LEVELS.Hard:
        firstNumber = randomTensDigit();
        modulos = findModulos(firstNumber);
        secondNumber = randomValueFromArray(modulos);

        while (Math.abs(secondNumber) < 10) {
          secondNumber = randomValueFromArray(modulos);
        }
        break;

      default:
        break;
    }
    return { firstNumber, secondNumber };
  };

  useEffect(() => {
    let firstNumber, secondNumber;

    switch (operator) {
      case OPTIONS["Plus or minus"]:
        const mathPoM = Math.random() < 0.5 ? OPERATORS.plus : OPERATORS.minus;
        setMath(mathPoM);
        switch (level) {
          case LEVELS.Easy:
            firstNumber = randomUnitsDigit();
            secondNumber = randomUnitsDigit;
            setNumber(firstNumber, secondNumber);
            break;
          case LEVELS.Medium:
            firstNumber = randomTensDigit();
            secondNumber = randomUnitsDigit;
            setNumber(firstNumber, secondNumber);
            break;
          case LEVELS.Hard:
            firstNumber = randomTensDigit();
            secondNumber = randomTensDigit;
            setNumber(firstNumber, secondNumber);
            break;
          default:
            break;
        }
        break;
      case OPTIONS.Multiplication:
        const mathMulti =
          Math.random() < 0.5 ? OPERATORS.multiply : OPERATORS.divide;
        setMath(mathMulti);

        if (mathMulti === OPERATORS.divide) {
          const calculation = findDive();
          setNumber(calculation.firstNumber, calculation.secondNumber);
        } else {
          switch (level) {
            case LEVELS.Easy:
              firstNumber = randomUnitsDigit();
              secondNumber = randomUnitsDigit();
              setNumber(firstNumber, secondNumber);
              break;
            case LEVELS.Medium:
              firstNumber = randomTensDigit();
              secondNumber = randomUnitsDigit();
              setNumber(firstNumber, secondNumber);
              break;
            case LEVELS.Hard:
              firstNumber = randomTensDigit();
              secondNumber = randomTensDigit();
              setNumber(firstNumber, secondNumber);
              break;
            default:
              break;
          }
        }
        break;
      case OPTIONS.Power:
        setMath("^");
        switch (level) {
          case LEVELS.Easy:
            firstNumber = randomUnitsDigit();
            secondNumber = 2;
            setNumber(firstNumber, secondNumber);
            break;
          case LEVELS.Medium:
            firstNumber = randomTensDigit();
            secondNumber = 2;
            setNumber(firstNumber, secondNumber);
            break;
          case LEVELS.Hard:
            firstNumber = randomUnitsDigit();
            secondNumber = 3;
            setNumber(firstNumber, secondNumber);
            break;
          default:
            break;
        }
        break;
      case OPTIONS.Random:
        randomCalculation(level);
        break;
      default:
        break;
    }
  }, [step == 2, question]);

  return (
    <SafeAreaView style={[styles.container]}>
      <ImageBackground
        source={require("./assets/bg.jpg")}
        resizeMode="cover"
        style={{ width, height }}
      >
        {step === 0 && <Step0 handleLevel={handleLevel} />}
        {step === 1 && (
          <Step1 setStep={() => setStep(0)} handleOperator={handleOperator} />
        )}
        {step === 2 && (
          <Step2
            reset={reset}
            num1={firstNum}
            num2={secondNum}
            math={math}
            question={question}
            setQuestion={setQuestion}
          />
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
