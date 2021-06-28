const Boto = (props) => {
    const liStyles = {
        display: "inline",
        padding: "0",
        margin: "0",
    };

    const btnStyles = {
        appearance: "unset",
        width: "50%",
        height: "50px",
        borderRadius: "0",
        border: "1px solid #aeaeae",
        fontSize: "1rem",
        cursor: "pointer",
    };

    return (
        <li style={liStyles}>
            <button style={btnStyles} type="button" onClick={props.hFunc}>{props.func}</button>
        </li>
    );
};

export default Boto;