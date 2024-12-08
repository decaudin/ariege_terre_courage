import styled from "styled-components";
import FormInput from "../../../../../../ui/Input/FormInput";

const DurationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SelectWrapper = styled.div`
    display: flex;
    gap: 10px;
`

const InputStyled = `
    color: black;
    border: 2px solid;
    border: 2px solid ${({ isInvalid }) => (isInvalid ? 'orange' : 'black')};
    width: 77px;
`

const Label = styled.label`
    font-size: 1rem;
    color: #333;
    margin-bottom: 15px;
`

const DurationSelection = ({ duration, onDurationChange, errors }) => {
    
    const hoursOptions = Array.from({ length: 25 }, (_, i) => i); // 0 à 24
    const minutesOptions = [0, 15, 30, 45]; // Par intervalles de 15 minutes

    return (
        <DurationWrapper>
            <Label>Durée de la randonnée :</Label>
            <SelectWrapper>
                <FormInput
                    as="select"
                    id="hours"
                    name="hours"
                    $inputStyles={InputStyled}
                    value={duration.hours}
                    $isInvalid={!!errors.hours}
                    onChange={(e) => onDurationChange("hours", parseInt(e.target.value, 10))}
                >
                    {hoursOptions.map((hour) => <option key={hour} value={hour}>{hour} h</option>)}
                </FormInput>
                
                <FormInput
                    as="select"
                    id="minutes"
                    name="minutes"
                    $inputStyles={InputStyled}
                    value={duration.minutes}
                    $isInvalid={!!errors.minutes}
                    onChange={(e) => onDurationChange("minutes", parseInt(e.target.value, 10))}
                >
                    {minutesOptions.map((minute) => <option key={minute} value={minute}>{minute} min</option>)}
                </FormInput>
            </SelectWrapper>
        </DurationWrapper>
    );
};

export default DurationSelection;
