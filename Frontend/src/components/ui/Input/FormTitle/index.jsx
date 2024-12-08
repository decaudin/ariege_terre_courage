import styled from "styled-components";

const Title = styled.h2`
    text-align: center;
    margin-top: 60px;
    margin-bottom: 30px;
`

export const FormTitle = ({children, className}) => <Title className={className}>{children}</Title>