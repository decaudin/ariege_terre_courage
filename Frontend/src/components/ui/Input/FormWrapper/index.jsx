import styled from "styled-components";

export const FormWrapper = styled.form`
    width: 50%;
    height: 450px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    background: transparent;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 60%;
    }
        
    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 450px) {
        width: 80%;
    }
`