const Escena = (props) => {
    const styles = {
        textAlign: "center",
        border: "1px solid black",
        borderRadius: "20px",
        padding: "10px",
    }
    
    return (
        <p style={styles}>{props.frase}</p>
    );
};

export default Escena;