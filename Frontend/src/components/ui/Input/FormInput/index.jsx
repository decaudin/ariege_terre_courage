import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50%;
`

const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;

    ${({ $customStyles }) => $customStyles}
`

const Input = styled.input`
    outline: none;
    background: transparent;
    border: 2px solid ${({ $isInvalid }) => ($isInvalid ? 'orange' : 'rgba(255, 255, 255, 0.2)')};
    border-radius: 40px;
    color: ${({ $isInvalid }) => ($isInvalid ? 'black' : '#fff')};
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 40px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.9); 
    }

    ${({ $inputStyles }) => $inputStyles}
`

const FormInput = ({ label, id, type, name, placeholder, $customStyles, $inputStyles, onChange, $isInvalid, ...props }) => {

    return (   
        <InputWrapper>
            <Label htmlFor={id} $customStyles={$customStyles}>{label}</Label>
            <Input type={type} id={id} name={name} placeholder={placeholder} $inputStyles={$isInvalid ? null : $inputStyles} onChange={onChange} $isInvalid={$isInvalid}  {...props} />
        </InputWrapper> 
    )
};

export default FormInput;


