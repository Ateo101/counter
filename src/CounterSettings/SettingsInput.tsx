import {ChangeEvent} from "react";

type PropsType = {
    name: string
    initial: number
    callback: (newValue: number) => void
    setCounterMessage: (msg: string) => void
    min: number
    max: number
}

export function SettingsInput({name, initial, callback, setCounterMessage, min, max}: PropsType) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(e.currentTarget.valueAsNumber)
        setCounterMessage(`enter values and press 'set'`)
    }
    return (
        <div>
            <div className={'settings-input'}>
                {name}
                <input
                    type={"number"}
                    value={initial}
                    onChange={onChangeHandler}
                    style={initial < 0 || min === max || min > max
                        ? {backgroundColor:'lightcoral'}
                        : {}}
                />
            </div>
        </div>
    )
}