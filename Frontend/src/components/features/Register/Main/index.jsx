import { useState } from "react";
import { useRegister } from "../../../../utils/hooks/apiRequest/Register";
import { handleChange } from "../../../../utils/function/handleChange";
import { FormBackground } from "../../../ui/Input/FormBackground";
import { RegisterForm } from "../../../ui/Input/FormWrapper";
import { FormTitle } from "../../../ui/Input/FormTitle";
import FormInput from "../../../ui/Input/FormInput";
import PasswordInput from "../../Auth/PasswordInput";
import { SubmitInput } from "../../../ui/Input/SubmitInput";
import SuccessRegistration from "../SuccesMessage";
import { ErrorMessage } from "../../../ui/ErrorMessage";
import { Loader } from "../../../ui/Loader";

const RegisterInput = () => {

    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [successMessage, setSuccessMessage] = useState("");
    const { registerUser, isError, isLoading } = useRegister('http://localhost:4000/api/auth/signup');

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
                        {isLoading && <Loader />}
                    </>
                )}
            </RegisterForm>
        </FormBackground>
    );
};

export default RegisterInput;