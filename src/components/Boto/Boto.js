import { Btn, Li } from "./Boto.styled";

const Boto = (props) => {
    return (
        <Li>
            <Btn onClick={props.hFunc} type="button">{props.func}</Btn>
        </Li>
    );
};

export default Boto;