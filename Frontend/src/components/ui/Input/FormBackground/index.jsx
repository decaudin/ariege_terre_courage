import styled from "styled-components";

export const FormBackground = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background: url('${(props) => props.$backgroundImage}') no-repeat;
    height: 600px;
    width: 60%;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    box-shadow: 3px 3px 8px rgb(207, 207, 207);

    @media (max-width: 1024px) {
        width: 70%;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 600px) {
        width: 90%;
    }

    @media (max-width: 450px) {
    width: 100%;
    }
`