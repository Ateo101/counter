import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Button} from "./Button/Button";
import {CounterSettings} from "./CounterSettings/CounterSettings";

function App() {

    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5);
    const [counter, setCounter] = useState(startValue)
    const [error, setError] = useState(false)
    const [counterMessage, setCounterMessage] = useState('')

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            setCounter(JSON.parse(valueAsString))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(counter))
    },[counter])

    useEffect(()=>{
        let valueAsString = localStorage.getItem('startValue')
        if (valueAsString) {
            setStartValue(JSON.parse(valueAsString))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('startValue', JSON.stringify(startValue))
    },[startValue])

    useEffect(()=>{
        let valueAsString = localStorage.getItem('maxValue')
        if (valueAsString) {
            setMaxValue(JSON.parse(valueAsString))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[maxValue])

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(startValue)
    }

    const setMinMax = (min: number, max: number) => {
        setMaxValue(max)
        setStartValue(min)
        setCounter(min)
        setCounterMessage('')
    }

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
                         counterMessage={counterMessage} />

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
