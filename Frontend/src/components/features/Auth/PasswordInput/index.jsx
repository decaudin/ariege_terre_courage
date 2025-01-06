import styled from "styled-components";
import FormInput from "../../../ui/Input/FormInput";
import { EyeToggle } from "../../../ui/EyeToggle";
import usePasswordToggle from "../../../../utils/hooks/PasswordToggle";

const InputPasswordWrapper = styled.div`
    position: relative;
`

const PasswordInput = ({ label, id, name, placeholder, required, value, onChange, autoComplete, $inputWrapperStyles, $inputStyles }) => {

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
                $inputWrapperStyles={$inputWrapperStyles}
                $inputStyles={$inputStyles}
            />
            <EyeToggle isVisible={isPasswordVisible} onToggle={togglePasswordVisibility} />
        </InputPasswordWrapper>
    );
};

export default PasswordInput;
