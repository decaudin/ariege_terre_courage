import styled from "styled-components";

const TextareaStyled = styled.textarea`
    border: 2px solid ${({ $isInvalid }) => ($isInvalid ? 'orange' : 'black')};
    border-radius: 10px;
    height: 100px;
    padding: 10px;
    width: 80%;
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

const Textarea = ({ label, id, name, placeholder, $isInvalid, ...props }) => (
    <>
        <Label htmlFor={id}>{label}</Label>
        <TextareaStyled id={id} name={name} placeholder={placeholder} $isInvalid={$isInvalid} {...props} />
    </>
);

export default Textarea;
