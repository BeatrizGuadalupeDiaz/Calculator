type value = string | number;
interface Props {
  value: value;
  typeBtn: string;
  setCurrentValue: any;
  currentValue: string;
}

const setNumber = (number: value, setCurrentValue: any) => {
  setCurrentValue((prev: string) => prev + number);
};
const setMetod= (metod: value, setCurrentValue: any) => {
  const useMetod: any = {
    AC: () => setCurrentValue(""),
    DEL: () =>
      setCurrentValue((prev: string) => prev.substring(0, prev.length - 1)),
    "%": () =>
      setCurrentValue((prev: string) => (Number(prev) / 100).toString()),
  };
  useMetod[metod]();
};
const setOperator = (currentValue: string, setCurrentValue: any) => {
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
      console.log(splitNumbers)
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
  const handleTypeBtn: any = {
    primary: () => setNumber(value,setCurrentValue),
    secondary: () => setOperator(currentValue, setCurrentValue),
    tertiary: () => setMetod(value, setCurrentValue),
  };
  handleTypeBtn[typeBtn]();
};
