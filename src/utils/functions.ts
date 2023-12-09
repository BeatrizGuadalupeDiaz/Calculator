type value = string | number | any;
interface Props {
  value: value;
  typeBtn: string;
  setCurrentValue: any;
  currentValue: string;
}

const handleSetNumber = (number: value, setCurrentValue: any) => {
  setCurrentValue((prev: string) => prev + number.toString());
};
const handleMetod = (metod: value, setCurrentValue: any) => {
  const useMetod: any = {
    AC: () => setCurrentValue(""),
    DEL: () =>
      setCurrentValue((prev: string) => prev.substring(0, prev.length - 1)),
    "%": () =>
      setCurrentValue((prev: string) => (Number(prev) / 100).toString()),
  };
  useMetod[metod]();
};
const handleOperator = (currentValue: string, setCurrentValue: any) => {
  const operations: any = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
  };

  for (const operator in operations) {
    if (currentValue.includes(operator)) {
      const splitNumbers = currentValue.split(operator);
      const number = splitNumbers.map(Number).reduce(operations[operator]);
      setCurrentValue(number.toString());
      break;
    }
  }
};
export const verifyTypeBtn = ({
  value,
  typeBtn,
  setCurrentValue,
  currentValue,
}: Props) => {
  const verify: any = {
    primary: () => handleSetNumber(value, setCurrentValue),
    secondary: () => handleOperator(currentValue, setCurrentValue),
    tertiary: () => handleMetod(value, setCurrentValue),
  };
  verify[typeBtn]();
};
