import { OPERATORS, LEVELS } from "../constants/app";

export const randomFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomValueFromArray = (values) => {
    const size = values.length;

    return size === 1 ? values[0] : values[randomFromRange(0, size - 1)];
}

export const findModulos = (number) => {
    const absNum = Math.abs(number);

    if(absNum === 1 || absNum === 0) {
        return [1];
    }

    const modulos = [];
    for(let i = 2; i <= absNum; i++) {
        if(number % i === 0) {
            modulos.push(i);
        }
    }

    return modulos.reduce((acc, curr, idx) => {
        acc.push(...[-curr, curr]);

        return acc;
    }, [])
}

export const randomUnitsDigit = () => randomFromRange(-9, 9);

export const randomTensDigit = () => Math.random() > 0.5 ? randomFromRange(-30, -10) : randomFromRange(10, 30);

export const randomCalculation = (level, operators) => {
    const operator = randomValueFromArray(operators);
    let firstNumber, secondNumber;

    if(operator.value === OPERATORS.logarit.value) {
        switch(level) {
            case LEVELS.easy:
                firstNumber = randomUnitsDigit();
                secondNumber = 2;
                break;
            case LEVELS.medium:
                firstNumber = randomTensDigit();
                secondNumber = 2;
                break;
            case LEVELS.hard:
                firstNumber = randomUnitsDigit();
                secondNumber = 3;
                break;

            default: break;
        }
    } else if(operator.value === OPERATORS.divide.value) {
        let modulos;

        switch(level) {
            case LEVELS.easy :
                firstNumber = randomUnitsDigit();
                modulos = findModulos(firstNumber);
                secondNumber = randomValueFromArray(modulos);

                while(Math.abs(secondNumber) >= 10) {
                    secondNumber = randomValueFromArray(modulos);
                }
                break;
            
            case LEVELS.medium :
                firstNumber = randomTensDigit();
                modulos = findModulos(firstNumber);
                secondNumber = randomValueFromArray(modulos);
                break;

            case LEVELS.hard:
                firstNumber = randomTensDigit();
                modulos = findModulos(firstNumber);
                secondNumber = randomValueFromArray(modulos);

                while(Math.abs(secondNumber) < 10) {
                    secondNumber = randomValueFromArray(modulos);
                }
                break;

            default: break;
        }
    } else {
        switch(level) {
            case LEVELS.easy:
                firstNumber = randomUnitsDigit();
                secondNumber = randomUnitsDigit();
                break;
            case LEVELS.medium:
                firstNumber = randomTensDigit();
                secondNumber = randomUnitsDigit();
                break;
            case LEVELS.hard:
                firstNumber = randomTensDigit();
                secondNumber = randomTensDigit();
                break;

            default: break;
        }
    }

    if(secondNumber < 0) {
        secondNumber = `(${secondNumber})`;
    }

    return {
        firstNumber,
        secondNumber,
        operator
    }
}

export const calculateFromCalculationObject = (calculation) => {
    if(calculation.operator.value === OPERATORS.logarit.value) {
        return Math.pow(calculation.firstNumber, calculation.secondNumber);
    }

    return eval(`${calculation.firstNumber}${calculation.operator.value}${calculation.secondNumber}`);
}