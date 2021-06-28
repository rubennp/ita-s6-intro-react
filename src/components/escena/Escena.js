const Escena = (props) => {
    const styles = {
        textAlign: "center",
        border: "2px solid black",
        borderRadius: "20px",
        padding: "10px",
    };
    
    if (props.actiu) styles.backgroundColor = "rgba(255, 0, 0, 0.5)";

    return (
        <p style={styles}>{props.frase}</p>
    );
};

export default Escena;