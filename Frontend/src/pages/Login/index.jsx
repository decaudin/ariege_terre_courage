import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FormBackground } from "../../components/Auth/FormBackground";
import { LoginWrapper } from "../../components/Auth/FormWrapper";
import { FormTitle } from "../../components/Input/FormTitle";
import FormInput from "../../components/Input/FormInput";
import PasswordInput from "../../components/Auth/PasswordInput";
import { SubmitInput } from "../../components/Input/SubmitInput";
import { useLogin } from "../../utils/hooks/apiRequest/Login";
import { handleChange } from "../../utils/function/handleChange";
import { ErrorMessage } from "../../components/Auth/ErrorMessage";

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

const Login = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const { loginUser, isError } = useLogin('http://localhost:4000/api/auth/login');

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
            </LoginWrapper>
        </FormBackground>  
    ) 
}

export default Login