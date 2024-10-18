import styled from "styled-components";

const Submit = styled.input`
    background-color: #fff;
    border: none;
    border-radius: 40px;
    display: flex;
    margin: auto;
    width: 50%;
    height: 35px;
    cursor: pointer;
`

const SubmitInput = ({ type, value }) => {
    
    return (
        <Submit type={type} value={value} />
    )
}

export default SubmitInput;
