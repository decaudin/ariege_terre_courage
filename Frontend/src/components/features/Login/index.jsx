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

const InputPasswordStyled = `
    margin-bottom: 30px;
`

const InputWrapperCheckboxStyled = `
    flex-direction: row-reverse;
    align-items: center;
    justify-content: start;
    margin-bottom: 30px;

    @media (max-width: 600px) {
        width: 70%;
    }
`

const LabelCheckboxStyled = `
    position: initial;
    width: initial;
    height: initial;
`

const InputCheckboxStyled = `
    cursor: pointer;
    margin-bottom: 2px;
    margin-right: 15px;
    width: 15px;

    @media (max-width: 600px) {
        margin-right: 10px;
    }
`

const RegisterLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
    margin-top: 30px;
`

const LoginInput = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
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
                <PasswordInput label="Mot de passe :" id="password" name="password" placeholder="mot de passe" $inputWrapperStyles={InputWrapperStyled} $inputStyles={InputPasswordStyled} required value={formData.password} onChange={handleChange(setFormData)} autoComplete="current-password" />
                <FormInput label="Rester connecté·e" id="checkbox" type="checkbox" name="rememberMe" $inputWrapperStyles={InputWrapperCheckboxStyled} $labelStyles={LabelCheckboxStyled} $inputStyles={InputCheckboxStyled} value={formData.rememberMe} onChange={(e) => {setFormData(prev => ({ ...prev, rememberMe: e.target.checked }))}}/>
                <SubmitInput type="submit" value="Se connecter" />                              
                <RegisterLink to="/sign-up">Créer mon compte</RegisterLink>
                {isError && <ErrorMessage>Paire identifiant/mot de passe incorrecte.</ErrorMessage>}
                {isLoading && <Loader />}
            </FormWrapper>
        </FormBackground>  
    ) 
}

export default LoginInput