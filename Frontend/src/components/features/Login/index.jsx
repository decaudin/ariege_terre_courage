import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormBackground } from "../../ui/Input/FormBackground";
import { FormWrapper } from "../../ui/Input/FormWrapper";
import { FormTitle } from "../../ui/Input/FormTitle";
import FormInput from "../../ui/Input/FormInput";
import { InputWrapperStyled } from "../../ui/Input/InputWrapperStyled";
import PasswordInput from "../../features/Auth/PasswordInput";
import { SubmitInput } from "../../ui/Input/SubmitInput";
import { useLogin } from "../../../utils/hooks/apiRequest/Login";
import { handleChange } from "../../../utils/function/handleChange";
import { ErrorMessage } from "../../ui/ErrorMessage";
import { Loader } from "../../ui/Loader";

const RegisterLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
    margin-top: 55px;
`

const LoginInput = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const { loginUser, isError, isLoading } = useLogin('http://localhost:4000/api/auth/login');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await loginUser(formData);
        if (success) {
            toast.success('Vous avez bien été connecté !', { autoClose: 3000 });
            navigate("/");
        } 
    };

    return (
        <FormBackground $backgroundImage="/assets/login-background.jpg">
            <FormWrapper onSubmit={handleSubmit}>
                <FormTitle>Login</FormTitle>
                <FormInput label="E-mail :" id="email" type="email" name="email" placeholder="email" $inputWrapperStyles={InputWrapperStyled} required autoComplete="email" value={formData.email} onChange={handleChange(setFormData)}/>
                <PasswordInput label="Mot de passe :" id="password" name="password" placeholder="mot de passe" $inputWrapperStyles={InputWrapperStyled} required value={formData.password} onChange={handleChange(setFormData)} autoComplete="current-password" />
                <SubmitInput type="submit" value="Se connecter" />                              
                <RegisterLink to="/sign-up">Créer mon compte</RegisterLink>
                {isError && <ErrorMessage>Paire identifiant/mot de passe incorrecte.</ErrorMessage>}
                {isLoading && <Loader />}
            </FormWrapper>
        </FormBackground>  
    ) 
}

export default LoginInput