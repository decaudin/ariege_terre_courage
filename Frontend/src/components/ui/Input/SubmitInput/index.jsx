import styled from "styled-components";

const Submit = styled.input`
    background-color: #fff;
    border: none;
    border-radius: 40px;
    display: flex;
    margin: auto;
    width: 55%;
    height: 35px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

    @media (max-width: 600px) {
        width: 70%;
    }
`

export const SubmitInput = ({ type, value, disabled }) => <Submit type={type} value={value} disabled={disabled} />

