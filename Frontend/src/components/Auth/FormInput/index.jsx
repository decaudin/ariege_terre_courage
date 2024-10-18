import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50%;
`;

const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`;

const Input = styled.input`
    outline: none;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    color: #fff;
    height: 30px;
    padding-left: 10px;
    margin-bottom: 40px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.9); 
    }
`;

const FormInput = ({ label, id, type, name, placeholder, ...props }) => {

    return (   
        <InputWrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input type={type} id={id} name={name} placeholder={placeholder} {...props} />
        </InputWrapper> 
    )
};

export default FormInput;


