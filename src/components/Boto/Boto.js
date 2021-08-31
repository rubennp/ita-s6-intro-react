import { Btn, Li } from "./Boto.styled";

const Boto = ({hFunc, func}) => {
    return (
        <Li>
            <Btn onClick={hFunc} type="button">{func}</Btn>
        </Li>
    );
};

export default Boto;