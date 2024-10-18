import styled from "styled-components";
import { Link } from "react-router-dom";
import FormBackground from "../../components/Auth/FormBackground";
import { LoginWrapper } from "../../components/Auth/FormWrapper";
import FormTitle from "../../components/Auth/FormTitle";
import FormInput from "../../components/Auth/FormInput";
import SubmitInput from "../../components/Auth/SubmitInput";

const LoginForm = styled.form`
    margin-bottom: 35px;
`

const CreateLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: black;
`

const Login = () => {

    return (
        <FormBackground $backgroundImage="/assets/login-background.jpg">
            <LoginWrapper>
                <LoginForm>
                    <FormTitle title="Login" />
                    <FormInput label="E-mail :" id="email" type="email" name="email" placeholder="email" required autoComplete="email" />
                    <FormInput label="Mot de passe :" id="password" type="password" name="password" placeholder="mot de passe" required autoComplete="current-password" />
                    <SubmitInput type="submit" value="Se connecter" />
                </LoginForm>
                <CreateLink to="/register">Créer mon compte</CreateLink>
            </LoginWrapper>
        </FormBackground>  
    ) 
}

export default Login