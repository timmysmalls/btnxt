const JsonInput = ({input, setInput, formatInput, valid}) => {
    const disabled = !valid || input === "";

    return (
        <div className="json-input">
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
