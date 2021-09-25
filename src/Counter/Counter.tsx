import './../App.css';

type CounterPropsType = {
    counter: number
    maxValue: number
    error: boolean
    counterMessage: string
}

export function Counter({counter, maxValue, error, counterMessage}: CounterPropsType) {
    if (counter < maxValue) {
        return <div className={error && counterMessage ? "counter-red" : "counter-default"}>
            {error && counterMessage ? 'Incorrect Value!' : counterMessage ? counterMessage : counter}
        </div>
    }

    else {
        return <div className={"counter-red"}>
            {counter}
        </div>
    }
}