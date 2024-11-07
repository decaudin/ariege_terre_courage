import styled from "styled-components";
import FormInput from "../FormInput";

const DifficultyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`

const RadioWrapper = styled.div`
    display: flex;
`

const LabelStyled = `
    position: static;
    font-size: 0.9vw;
    width: auto;
    height: auto;
    margin-bottom: 10px;
`

const InputStyled = `
    height: 17px;
`

const DifficultySelection = ({value, onChange}) => {
    return (
        <DifficultyWrapper>
            <p>Difficulté :</p>
            <RadioWrapper>
                <FormInput 
                    type="radio" 
                    id="beginner" 
                    name="difficulty" 
                    label="Débutant" 
                    value="beginner" 
                    checked={value === 'beginner'} 
                    onChange={onChange} 
                    $customStyles={LabelStyled} 
                    $inputStyles={InputStyled} 
                />
                <FormInput 
                    type="radio" 
                    id="intermediate" 
                    name="difficulty" 
                    label="Intermédiaire" 
                    value="intermediate"
                    checked={value === 'intermediate'} 
                    onChange={onChange}
                    $customStyles={LabelStyled} 
                    $inputStyles={InputStyled} 
                />
                <FormInput 
                    type="radio" 
                    id="hard" 
                    name="difficulty" 
                    label="Difficile" 
                    value="hard"
                    checked={value === 'hard'} 
                    onChange={onChange}
                    $customStyles={LabelStyled} 
                    $inputStyles={InputStyled} 
                />
                <FormInput 
                    type="radio" 
                    id="expert" 
                    name="difficulty" 
                    label="Expert" 
                    value="expert"
                    checked={value === 'expert'} 
                    onChange={onChange}
                    $customStyles={LabelStyled} 
                    $inputStyles={InputStyled} 
                />
            </RadioWrapper>
        </DifficultyWrapper>
    );
};

export default DifficultySelection;
