import styled from "styled-components";

export const Message = styled.p`
    color: red;
    font-weight: bold;
    font-size: 1.2vw;
    text-align: center;
    margin-top: 25px;
`

export const ErrorMessage = ({children}) => <Message>{children}</Message>