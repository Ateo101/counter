import {SettingsInput} from "./SettingsInput";
import {Button} from "../Button/Button";
import React, {useEffect, useState} from "react";

type PropsType = {
    setMinMax: (min: number, max: number) => void
    startValue: number
    maxValue: number
    setError: (error: boolean) => void
    setCounterMessage: (msg: string) => void
}

export function CounterSettings({setMinMax,startValue,maxValue,setError,setCounterMessage}: PropsType) {

    const [min, setMin] = useState(startValue)
    const [max, setMax] = useState(maxValue)

    useEffect(()=>{
        let valueAsString = localStorage.getItem('startValueSettings')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setMin(isValueIncorrect ? startValue : valueAsNumber)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('startValueSettings', JSON.stringify(min))
    },[min])

    useEffect(()=>{
        let valueAsString = localStorage.getItem('maxValueSettings')
        if (valueAsString) {
            if (!isValueIncorrect)
            setMax(JSON.parse(valueAsString))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('maxValueSettings', JSON.stringify(max))
    },[max])

    const isValueIncorrect =  min === max || min < 0 || max < 0 || min > max

    isValueIncorrect ? setError(true) : setError(false)

    return (
        <div className={'default-block'}>
            <SettingsInput name={'start value'}
                           initial={min}
                           callback={setMin}
                           setCounterMessage={setCounterMessage}
                           min={min} max={max}/>

            <SettingsInput name={'max value'}
                           initial={max}
                           callback={setMax}
                           setCounterMessage={setCounterMessage}
                           min={min} max={max}/>

            <Button callback={() => setMinMax(min,max)}
                    name={'Set'}
                    disabled={isValueIncorrect}
            />
        </div>
    )
}