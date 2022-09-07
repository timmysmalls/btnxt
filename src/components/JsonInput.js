const JsonInput = ({input, setInput, formatInput, valid}) => {
    const disabled = !valid || input === "";

    return (
        <div className="json-input">
            <p className="json-input__instructions">
                {"Please paste your JSON object here, and hit the \"Format\" button to get the output below. "}
                {"The top level object cannot be an array, but arrays nested inside are supported."}
            </p>
            <textarea className="json-input__input" value={input} onChange={e => setInput(e.target.value)} ></textarea>
            {!valid && <p className="json-input__error">{"Input is not a valid object"}</p>}
            <button
                className={`json-input__button ${disabled ? "json-input__button--disabled" : "json-input__button--enabled"}`}
                disabled={disabled}
                onClick={formatInput}
            >
                Format
            </button>
        </div>
    );
};

export default JsonInput;
