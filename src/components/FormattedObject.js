const FormattedObject = props => {
    return (
        <div className="formatted-object">
            <h3 className="formatted-object__title">Formatted output:</h3>
            <div className="formatted-object__output" dangerouslySetInnerHTML={{__html: props.object }}>
            </div>
        </div>
    );
};

export default FormattedObject;
