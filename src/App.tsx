import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Button} from "./Button/Button";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {
    IncreaseCounterAC,
    initialStateType,
    ResetCounterAC,
    SetCounterAC,
    SetMaxValueAC,
    SetStartValueAC
} from "./reducers/Reducers";
import {rootReducerType} from "./store/store";

function App() {

    const [error, setError] = useState(false)
    const [counterMessage, setCounterMessage] = useState('')

    let dispatch = useDispatch();
    let {startValue, maxValue, counter} = useSelector<rootReducerType, initialStateType>(state => state.counter)

    function increaseCounter() {
        dispatch(IncreaseCounterAC());
    }
    function resetCounter() {
        dispatch(ResetCounterAC(startValue));
    }
    function setMinMax(min: number, max: number) {
        dispatch(SetMaxValueAC(max));
        dispatch(SetStartValueAC(min));
        dispatch(SetCounterAC(min));
        setCounterMessage('')
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            // setCounter(JSON.parse(valueAsString))
            dispatch(SetCounterAC(JSON.parse(valueAsString)))
        }
        let valueAsString2 = localStorage.getItem('startValue')
        if (valueAsString2) {
            // setStartValue(JSON.parse(valueAsString))
            dispatch(SetStartValueAC(JSON.parse(valueAsString2)))
        }
        let valueAsString3 = localStorage.getItem('maxValue')
        if (valueAsString3) {
            // setMaxValue(JSON.parse(valueAsString))
            dispatch(SetMaxValueAC(JSON.parse(valueAsString3)))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    return (
        <div className="App">

            <CounterSettings
                setMinMax={setMinMax}
                startValue={startValue}
                maxValue={maxValue}
                setError={setError}
                setCounterMessage={setCounterMessage}
            />

            <div className={'default-block'}>
                <Counter counter={counter}
                         maxValue={maxValue}
                         error={error}
                         counterMessage={counterMessage}/>

                <Button disabled={counterMessage ? true : counter === maxValue}
                        callback={increaseCounter}
                        name={'Increase'}/>

                <Button disabled={counterMessage ? true : counter === startValue}
                        callback={resetCounter}
                        name={'Reset'}/>
            </div>

        </div>
    );
}

export default App;
