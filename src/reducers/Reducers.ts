const counter = 0;
const startValue = 0;
const maxValue = 5;

/* ------------------------------------------------------------------------------------------------- */

export const CounterReducer = (state=counter, action: counterTsarType) => {
    switch (action.type) {
        case 'INCREASE-COUNTER': {
            return state + 1;
        }
        case "RESET-COUNTER": {
            return state = action.num
        }
        case "SET-COUNTER":{
            return  state = action.num
        }
        default:
            return state;
    }
}

export type counterTsarType = IncreaseCounterACType | ResetCounterACType | SetCounterACType
export type IncreaseCounterACType = ReturnType<typeof IncreaseCounterAC>
export type ResetCounterACType = ReturnType<typeof ResetCounterAC>
export type SetCounterACType = ReturnType<typeof SetCounterAC>

export const IncreaseCounterAC = () => {
    return {
        type: 'INCREASE-COUNTER'
    } as const
}
export const ResetCounterAC = (num: number) => {
    return {
        type: 'RESET-COUNTER', num,
    } as const
}
export const SetCounterAC = (num: number) => {
    return {
        type: 'SET-COUNTER',
        num,
    } as const
}

/* ------------------------------------------------------------------------------------------------- */

export const startValueReducer = (state=startValue, action: startValueTsarType) => {
    switch (action.type) {
        case 'SET-START-VALUE': {
            return  state = action.num
        }
        default:
            return state;
    }
}

export type startValueTsarType = SetStartValueACType
export type SetStartValueACType = ReturnType<typeof SetStartValueAC>
export const SetStartValueAC = (num: number) => {
    return {
        type: 'SET-START-VALUE',
        num,
    } as const
}

/* ------------------------------------------------------------------------------------------------- */

export const maxValueReducer = (state=maxValue, action: maxValueTsarType) => {
    switch (action.type) {
        case 'SET-MAX-VALUE': {
            return  state = action.num
        }
        default:
            return state;
    }
}

export type maxValueTsarType = SetMaxValueACType
export type SetMaxValueACType = ReturnType<typeof SetMaxValueAC>
export const SetMaxValueAC = (num: number) => {
    return {
        type: 'SET-MAX-VALUE',
        num,
    } as const
}