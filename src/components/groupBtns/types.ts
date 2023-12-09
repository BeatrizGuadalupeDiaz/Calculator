import { btnType } from "../../components/btns/type";

export interface PropsButtonSet {
  typeBtn: btnType;
  sign: string[] | number[];
  flexDirec?: {};
  setCurrentValue: any;
  currentValue: string;
}
