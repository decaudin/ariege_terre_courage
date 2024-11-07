import styled from "styled-components";
import FormInput from "../../Input/FormInput";
import { EyeToggle } from "../EyeToggle";
import usePasswordToggle from "../../../utils/hooks/PasswordToggle";

const InputPasswordWrapper = styled.div`
    position: relative;
`

const PasswordInput = ({ label, id, name, placeholder, required, value, onChange, autoComplete }) => {

    const { isPasswordVisible, togglePasswordVisibility } = usePasswordToggle();

    return (
        <InputPasswordWrapper>
            <FormInput
                label={label}
                id={id}
                type={isPasswordVisible ? "text" : "password"}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                autoComplete={autoComplete}
            />
            <EyeToggle isVisible={isPasswordVisible} onToggle={togglePasswordVisibility} />
        </InputPasswordWrapper>
    );
};

export default PasswordInput;
