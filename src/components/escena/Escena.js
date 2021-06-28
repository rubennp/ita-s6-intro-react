const Escena = (props) => {
    const styles = {
        textAlign: "center",
        border: "2px solid black",
        borderRadius: "20px",
        padding: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.75)"
    };
    
    if (props.actiu) {
        styles.backgroundColor = "rgba(255, 0, 0, 0.75)";
        styles.fontWeight = "bold";
    }
    
    return (
        <p style={styles}>{props.frase}</p>
    );
};

export default Escena;