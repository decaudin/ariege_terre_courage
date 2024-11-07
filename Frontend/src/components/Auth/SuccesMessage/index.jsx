import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SuccessMessage = styled.p`
    font-size: 1.8vw;
    font-weight: bold; 
    text-align: center;
    margin-top: 170px;
    margin-bottom: 40px;
`

const RedirectButton = styled.button`
    padding: 10px 20px; 
    border-radius: 20px;
    border: none;
    font-size: 1rem; 
    cursor: pointer;
    display: flex;
    margin: auto;
`

const SuccessRegistration = ({successMessage}) => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/login");
    };

    return (
        <>
            <SuccessMessage role="alert">{successMessage}</SuccessMessage>
            <RedirectButton onClick={handleRedirect}>Aller à la page de connexion</RedirectButton>
        </>
    )
}

export default SuccessRegistration;