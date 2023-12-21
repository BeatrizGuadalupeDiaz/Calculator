import { btnType } from "../../components/btns/type";

export interface PropsButtonSet {
  typeBtn: btnType;
  signs: string[];
  flexDirec?: {};
  setCurrentValue: any;
  currentValue: string;
}
