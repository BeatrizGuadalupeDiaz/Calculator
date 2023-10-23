import { FormEvent } from "react"

export interface PropsBtn {
    text: string,
    textStyle?: any
    type: btnType,
    onPress: (event?: FormEvent<HTMLFormElement> | undefined) => void;
    btnStyle?: any,
    isLoading?: boolean
}

export type btnType = 'primary' | 'secondary' | 'tertiary'