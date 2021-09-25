import './../App.css';

type PropsType = {
    disabled?: boolean
    callback: () => void
    name: string
}

export function Button({disabled, callback, name}: PropsType) {
    return (
        <button disabled={disabled}
                className={"btn"}
                onClick={() => {callback()}}
                value={name}>
            {name}
        </button>
    )
}