export type initialStateType = typeof initialState;

const initialState = {
    counter: 0,
    startValue: 0,
    maxValue: 5,
}

/* ------------------------------------------------------------------------------------------------- */

export const CounterReducer = (state=initialState, action: counterTsarType):initialStateType => {
    switch (action.type) {
        case 'INCREASE-COUNTER': {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        case "RESET-COUNTER": {
            return {
                ...state,
                counter: action.num
            }
        }
        case "SET-COUNTER":{
            return {
                ...state,
                counter: action.num
            }
        }
        case 'SET-START-VALUE': {
            return {
                ...state,
                startValue: action.num
            }
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.num
            }
        }
        default:
            return state;
    }
}

export type counterTsarType = IncreaseCounterACType | ResetCounterACType | SetCounterACType | SetStartValueACType | SetMaxValueACType
export type IncreaseCounterACType = ReturnType<typeof IncreaseCounterAC>
export type ResetCounterACType = ReturnType<typeof ResetCounterAC>
export type SetCounterACType = ReturnType<typeof SetCounterAC>
export type SetMaxValueACType = ReturnType<typeof SetMaxValueAC>
export type SetStartValueACType = ReturnType<typeof SetStartValueAC>

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
export const SetMaxValueAC = (num: number) => {
    return {
        type: 'SET-MAX-VALUE',
        num,
    } as const
}
export const SetStartValueAC = (num: number) => {
    return {
        type: 'SET-START-VALUE',
        num,
    } as const
}

/* ------------------------------------------------------------------------------------------------- */

/*export const startValueReducer = (state=startValue, action: startValueTsarType) => {
    switch (action.type) {

        default:
            return state;
    }
}

export type startValueTsarType = SetStartValueACType


/!* ------------------------------------------------------------------------------------------------- *!/

export const maxValueReducer = (state=maxValue, action: maxValueTsarType) => {
    switch (action.type) {

        default:
            return state;
    }
}

export type maxValueTsarType = SetMaxValueACType*/
