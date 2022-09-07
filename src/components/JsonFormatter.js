import { useState, useEffect } from "react";
import JsonInput from "./JsonInput";
import FormattedObject from "./FormattedObject";
import ObjectFormatter from "../utils/objectFormatter";

const JsonFormatter = props => {
    const [input, setInput] = useState("");
    const [objectIsValid, setObjectIsValid] = useState(true);
    const [formattedObject, setFormattedObject] = useState(null);

    const formatInput = () => {
        if (!objectIsValid || input === "") {
            return;
        }

        const json = JSON.parse(input);

        const formatter = new ObjectFormatter(json);

        formatter.format();
        setFormattedObject(formatter.returnValue);
    };

    useEffect( () => {
        setObjectIsValid(isValidObject());
    }, [input]);

    const isValidObject = () => {
        if (input === "") {
            return true;
        }

        try {
            const parsedJson = JSON.parse(input);
            return !Array.isArray(parsedJson);
        } catch {
            return false;
        }
    };

    return (
        <div className="json-formatter">
            <div className="json-formatter__container">
                <h2 className="json-formatter__title">JSON Formatter</h2>
                <JsonInput input={input} setInput={setInput} formatInput={formatInput} valid={objectIsValid}/>    
                {formattedObject && <FormattedObject object={formattedObject} />}
            </div>
        </div>
    );
};


export default JsonFormatter;
