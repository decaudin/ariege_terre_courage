import styled from "styled-components";

const LoginWrapper = styled.div`
    width: 50%;
    height: 400px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    background: transparent;
    margin: auto;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

const RegisterForm = styled(LoginWrapper).attrs({ as: 'form' })``

export { LoginWrapper, RegisterForm };
