import styled from "styled-components";
import FormInput from "../../../../../../ui/Input/FormInput";

const RatingWrapper = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: space-evenly;
    width: 50%;
    margin: auto;
    margin-bottom: 30px;
`

const StarsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    width: 80%;
`

const StarLabel = styled.label`
    cursor: pointer;
    font-size: 30px;
    color: ${({ $isChecked }) => ($isChecked ? '#FFD700' : '#ccc')};

    input[type="radio"] {
        display: none;
    }

    @media (max-width: 350px) {
        font-size: 25px;
    }
`

const RatingForm = ({ rating, onChange }) => {

    return (
        <RatingWrapper>
            <label>Intérêt :</label>
            <StarsWrapper>
                {[1, 2, 3, 4, 5].map((star) => (
                    <StarLabel key={star} $isChecked={star <= rating}>
                        <FormInput label="Note" id={`star${star}`} type="radio" name="rating" value={star} onChange={onChange} />
                        ★
                    </StarLabel>
                ))}
            </StarsWrapper>
        </RatingWrapper>
    );
};

export default RatingForm;