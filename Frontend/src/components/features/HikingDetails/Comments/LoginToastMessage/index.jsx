import { toast } from "react-toastify";
import styled from "styled-components";

const ToastButton = styled.button`
    margin-left: 10px !important;
    color: #0fccce;
    border: none;
    background: transparent;
    cursor: pointer;
`

const LoginToastMessage = ({navigate}) => {

    const handleClick = () => {
        toast.dismiss();
        navigate('/login')  
    }

    return (
        <>
            Connectez vous pour partager votre expérience ! 
            <ToastButton onClick={handleClick}>Se connecter</ToastButton>
        </>
    )
}

export default LoginToastMessage;

