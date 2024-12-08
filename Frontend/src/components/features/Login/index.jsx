import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FormBackground } from "../../ui/Input/FormBackground";
import { LoginWrapper } from "../../ui/Input/FormWrapper";
import { FormTitle } from "../../ui/Input/FormTitle";
import FormInput from "../../ui/Input/FormInput";
import PasswordInput from "../../features/Auth/PasswordInput";
import { SubmitInput } from "../../ui/Input/SubmitInput";
import { useLogin } from "../../../utils/hooks/apiRequest/Login";
import { handleChange } from "../../../utils/function/handleChange";
import { ErrorMessage } from "../../ui/ErrorMessage";
import { Loader } from "../../ui/Loader";

const LoginForm = styled.form`
    margin-bottom: 35px;
`

const RegisterLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
    margin-top: 55px;
`

const LoginInput = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const { loginUser, isError, isLoading } = useLogin('http://localhost:4000/api/auth/login');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await loginUser(formData);
        if (success) {
            navigate("/");
        } 
    };

    return (
        <FormBackground $backgroundImage="/assets/login-background.jpg">
            <LoginWrapper>
                <LoginForm onSubmit={handleSubmit}>
                    <FormTitle>Login</FormTitle>
                    <FormInput label="E-mail :" id="email" type="email" name="email" placeholder="email" required autoComplete="email" value={formData.email} onChange={handleChange(setFormData)}/>
                    <PasswordInput label="Mot de passe :" id="password" name="password" placeholder="mot de passe" required value={formData.password} onChange={handleChange(setFormData)} autoComplete="current-password" />
                    <SubmitInput type="submit" value="Se connecter" />                  
                </LoginForm>
                <RegisterLink to="/register">Créer mon compte</RegisterLink>
                {isError && <ErrorMessage>Paire identifiant/mot de passe incorrecte.</ErrorMessage>}
                {isLoading && <Loader />}
            </LoginWrapper>
        </FormBackground>  
    ) 
}

export default LoginInput

// Rajouter un Input type checkBox Remeber Me pour s'il est cliquer stocker token et user dans localStorage sinon sessionStorage