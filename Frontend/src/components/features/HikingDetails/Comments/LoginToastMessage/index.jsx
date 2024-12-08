import styled from "styled-components"

const ToastButton = styled.button`
    margin-left: 10px !important;
    color: #0fccce;
    border: none;
    background: transparent;
    cursor: pointer;
`

const LoginToastMessage = ({navigate}) => {

    return (
        <>
            Connectez vous pour partager votre expérience ! 
            <ToastButton onClick={() => navigate('/login')}>Se connecter</ToastButton>
        </>
    )
}

export default LoginToastMessage;

