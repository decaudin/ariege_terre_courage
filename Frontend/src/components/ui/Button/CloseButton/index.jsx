import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`

export const CloseButton = ({onClose}) => <Button onClick={onClose}>&times;</Button>