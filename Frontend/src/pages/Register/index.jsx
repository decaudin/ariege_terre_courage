import styled from "styled-components";
import { useState } from "react";
import { useRegister } from "../../utils/hooks/apiRequest/Register/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import FormBackground from "../../components/Auth/FormBackground";
import { RegisterForm } from "../../components/Auth/FormWrapper";
import FormTitle from "../../components/Auth/FormTitle";
import FormInput from "../../components/Auth/FormInput";
import SubmitInput from "../../components/Auth/SubmitInput";

const InputPasswordWrapper = styled.div`
    position: relative
`

const EyeWrapper = styled.span`
    position: absolute;
    top: 9px;
    right: 124px;
`

const Register = () => {

    const [formData, setFormData] = useState({ name: "", email: "", password: ""});

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const { registerUser, isError } = useRegister('http://localhost:4000/api/auth/signup');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            
        } catch (error) {
            
            console.error("Erreur d'enregistrement:", error);
        }
      };
    
    return (
        <FormBackground $backgroundImage="/assets/register-background.webp">
            <RegisterForm onSubmit={handleSubmit}>
                <FormTitle title="Register" />
                <FormInput label="Nom :" id="name" type="text" name="name" placeholder="nom" required autoComplete="username" value={formData.name} onChange={handleChange}/>
                <FormInput label="E-mail :" id="email" type="email" name="email" placeholder="email" required autoComplete="email" value={formData.email} onChange={handleChange}/>
                <InputPasswordWrapper>
                <FormInput label="Mot de passe :" id="password" type={isPasswordVisible ? 'text' : 'password'} name="password" placeholder="mot de passe" required autoComplete="current-password" value={formData.password} onChange={handleChange}/>
                <EyeWrapper onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
                </EyeWrapper>
                </InputPasswordWrapper>
                <SubmitInput type="submit" value="S'inscrire" />
                {isError && <p>Une erreur est survenue lors de l'enregistrement.</p>}
            </RegisterForm>
        </FormBackground>
    )
}

export default Register