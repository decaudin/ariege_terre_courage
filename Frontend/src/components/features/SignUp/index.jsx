import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "../../../utils/hooks/apiRequest/SignUp";
import { handleChange } from "../../../utils/function/handleChange";
import { FormBackground } from "../../ui/Input/FormBackground";
import { FormWrapper } from "../../ui/Input/FormWrapper";
import { FormTitle } from "../../ui/Input/FormTitle";
import FormInput from "../../ui/Input/FormInput";
import { InputWrapperStyled } from "../../ui/Input/InputWrapperStyled";
import PasswordInput from "../Auth/PasswordInput";
import { SubmitInput } from "../../ui/Input/SubmitInput";
import { ErrorMessage } from "../../ui/ErrorMessage";
import { Loader } from "../../ui/Loader";

const SignUpInput = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        }, []); 

    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const { signUpUser, isError, isLoading, errorMessage } = useSignUp('http://localhost:4000/api/auth/signup');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await signUpUser(formData);
            if (success) {
                toast.success('Votre compte a été créé avec succès!');
                navigate("/login");
            }
        } catch (error) {
            console.error("Erreur d'enregistrement:", error);
        }
    };

    return (
        <FormBackground $backgroundImage="/assets/register-background.webp">
            <FormWrapper onSubmit={handleSubmit}>
                <FormTitle>Sign Up</FormTitle>
                <FormInput label="Nom :" id="name" type="text" name="name" placeholder="nom" $inputWrapperStyles={InputWrapperStyled} required autoComplete="username" value={formData.name} onChange={handleChange(setFormData)}/>
                <FormInput label="E-mail :" id="email" type="email" name="email" placeholder="email" $inputWrapperStyles={InputWrapperStyled} required autoComplete="email" value={formData.email} onChange={handleChange(setFormData)}/>
                <PasswordInput label="Mot de passe :" id="password" name="password" placeholder="mot de passe" $inputWrapperStyles={InputWrapperStyled} required autoComplete="current-password" value={formData.password} onChange={handleChange(setFormData)}/>
                <SubmitInput type="submit" value="S'inscrire" />
                {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
                {isLoading && <Loader />}
            </FormWrapper>
        </FormBackground>
    );
};

export default SignUpInput;