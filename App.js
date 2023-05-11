import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Step1 } from "./src/components/Step1";
import { Step0 } from "./src/components/Step0";
import { Step2 } from "./src/components/Step2";
import { Step3 } from "./src/components/Step3";

const { width, height } = Dimensions.get("screen");

export default function App() {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState(null);
  const [operator, setOperator] = useState(null);
  const [point, setPoint] = useState(0);
  const [correct, setCorrect] = useState(0);

  const handleLevel = (level) => {
    setStep(1);
    setLevel(level);
  };

  const handleOperator = (option) => {
    setStep(2);
    setOperator(option);
  };

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  useEffect(() => {
    if (step === 2) {
      setPoint(0);
      setCorrect(0);
    }
  }, [step]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            reset={() => setStep(1)}
            level={level}
            operator={operator}
            setStep={setStep}
            setPoint={setPoint}
            setCorrect={setCorrect}
          />
        )}

        {step === 3 && (
          <Step3 setStep={setStep} point={point} correct={correct} />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
}
