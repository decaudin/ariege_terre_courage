import styled from "styled-components";

const Title = styled.h2`
    text-align: center;
    margin-top: 60px;
    margin-bottom: 30px;
`

const FormTitle = ({title}) => {

    return (
        <Title>{title}</Title>
    )
}

export default FormTitle;