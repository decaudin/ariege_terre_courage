import { useState } from "react";
import { useRegister } from "../../utils/hooks/apiRequest/Register/";
import { handleChange } from "../../utils/function/handleChange";
import { FormBackground } from "../../components/Auth/FormBackground";
import { RegisterForm } from "../../components/Auth/FormWrapper";
import { FormTitle } from "../../components/Input/FormTitle";
import FormInput from "../../components/Input/FormInput";
import PasswordInput from "../../components/Auth/PasswordInput";
import { SubmitInput } from "../../components/Input/SubmitInput";
import SuccessRegistration from "../../components/Auth/SuccesMessage";
import { ErrorMessage } from "../../components/Auth/ErrorMessage";

const Register = () => {

    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const { registerUser, isError } = useRegister('http://localhost:4000/api/auth/signup');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await registerUser(formData);
            if (success) {
                setSuccessMessage("Votre compte a été créé avec succès!");
            }
        } catch (error) {
            console.error("Erreur d'enregistrement:", error);
        }
    };

    return (
        <FormBackground $backgroundImage="/assets/register-background.webp">
            <RegisterForm onSubmit={handleSubmit}>
                {successMessage ? (
                    <SuccessRegistration successMessage={successMessage}/>
                ) : (
                    <>
                        <FormTitle>Register</FormTitle>
                        <FormInput label="Nom :" id="name" type="text" name="name" placeholder="nom" required autoComplete="username" value={formData.name} onChange={handleChange(setFormData)}/>
                        <FormInput label="E-mail :" id="email" type="email" name="email" placeholder="email" required autoComplete="email" value={formData.email} onChange={handleChange(setFormData)}/>
                        <PasswordInput label="Mot de passe :" id="password" name="password" placeholder="mot de passe" required value={formData.password} onChange={handleChange(setFormData)}/>
                        <SubmitInput type="submit" value="S'inscrire" />
                        {isError && <ErrorMessage>Une erreur est survenue lors de l'enregistrement.</ErrorMessage>}
                    </>
                )}
            </RegisterForm>
        </FormBackground>
    );
};

export default Register;
