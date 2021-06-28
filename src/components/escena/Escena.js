import { P } from './P.styled';

const Escena = (props) => {
    return (
        <P actiu={props.actiu}>{props.frase}</P>
    );
};

export default Escena;