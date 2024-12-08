import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ModalOverlay, ModalContainer } from "../../../../../ui/Modal";
import { FormTitle } from "../../../../../ui/Input/FormTitle";
import { CloseButton } from "../../../../../ui/Button/CloseButton";
import FormInput from "../../../../../ui/Input/FormInput";
import DurationSelection from "../Input/DurationInput";
import RatingForm from "../Input/RatingForm";
import Textarea from "../../../../../ui/Input/TextArea";
import DifficultySelection from "../Input/DifficultyInput";
import { SubmitInput } from "../../../../../ui/Input/SubmitInput";
import useSubmitForm from "../../../../../../utils/hooks/apiRequest/Comments/SubmitComment";
import { validateForm } from "../../../../../../utils/function/validateForm";
import { Loader } from "../../../../../ui/Loader";
import { Message, ErrorMessage } from "../../../../../ui/ErrorMessage";

const CommentsTitle = styled(FormTitle)`
    margin-top: 30px;
`

const StyledErrorMessage = styled(Message)`
    font-size: 1vw;
`

const SecondStyledErrorMessage = styled(StyledErrorMessage)`
    margin-top: -25px;
`

const LabelStyled = `
    position: relative;
    width: auto;
    height: auto;
    margin: 10px 0;
`

const InputStyled = `
    color: black;
    border: 2px solid;
`

const LabelFileStyled = `
    cursor: pointer;
    position: relative;
    width: auto;
    height: auto;
    margin-bottom: 20px;
    background-color: #CBD6DC;
    color: #306685;
    padding: 10px 15px;
    border-radius: 30px;
`

const InputFileStyled = `
    display: none;
`

const FileWrapper = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
`

const DeleteButton = styled.button`
    cursor: pointer;
    border: none;
    background-color: #CBD6DC;
    color: #306685;
    padding: 10px 15px;
    border-radius: 20px;
`

const AddCommentsModal = ({onClose}) => {

    const { id } = useParams();

    const { submitForm, isLoading, isError } = useSubmitForm('http://localhost:4000/api/comment/add');

    const [date, setDate] = useState('');
    const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState({});
    
    const handleDateChange = (e) => setDate(e.target.value);
    const handleRatingChange = (e) => setRating(Number(e.target.value));
    const handleTextareaChange = (e) => setComment(e.target.value);
    const handleDifficultyChange = (e) => setDifficulty(e.target.value);

    const handleDurationChange = (type, value) => {
        setDuration((prev) => ({
            ...prev,
            [type]: value,
        }));
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        if (newFile && files.length < 3) {
            setFiles([...files, newFile]);
        }
    };

    const removeFile = (index) => setFiles(files.filter((_, i) => i !== index));

    const handleSubmit = async (e) => {

        e.preventDefault();
        setErrors({});

        const newErrors = validateForm({ date, duration, rating, comment, difficulty, files });
    
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            const firstErrorKey = Object.keys(newErrors)[0];
            const firstErrorElement = document.querySelector(`[name="${firstErrorKey}"]`);
            if (firstErrorElement) {
                firstErrorElement.focus();
            }
            return;
        }

        if (files.length === 0) {
            alert("Veuillez télécharger au moins un fichier.");
            return;
        } 

        const formData = new FormData();

        formData.append('hikeId', id)
        formData.append('date', date);
        formData.append('duration[hours]', duration.hours);
        formData.append('duration[minutes]', duration.minutes);
        formData.append('rating', rating);
        formData.append('comment', comment);
        formData.append('difficulty', difficulty);
        
        files.forEach((file) => {
            formData.append('files', file);
        });  
        
        const result = await submitForm(formData);

        console.log(result)

        if (result) 
            onClose();
    }

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <CommentsTitle>Racontez-nous votre aventure !</CommentsTitle>
                    <CloseButton onClose={onClose} />
                    <form onSubmit={handleSubmit}>
                        <FormInput label="Date :" id="date" type="date" name="date" value={date} $isInvalid={!!errors.date} onChange={handleDateChange} $customStyles={LabelStyled} $inputStyles={InputStyled} />
                        {errors.date && <SecondStyledErrorMessage>{errors.date}</SecondStyledErrorMessage>}
                        <DurationSelection duration={duration} onDurationChange={handleDurationChange} errors={errors}/>
                        {errors.duration && <SecondStyledErrorMessage>{errors.duration}</SecondStyledErrorMessage>}
                        <RatingForm rating={rating} onChange={handleRatingChange}/>
                        {errors.rating && <SecondStyledErrorMessage>{errors.rating}</SecondStyledErrorMessage>}
                        <Textarea 
                            label="Décrivez votre expérience avec la randonnée :"
                            id="experience"
                            name="experience"
                            placeholder="Dites-nous en plus ..."
                            value={comment}
                            $isInvalid={!!errors.comment}
                            onChange={handleTextareaChange}
                        />
                        {errors.comment && <StyledErrorMessage>{errors.comment}</StyledErrorMessage>}
                        <DifficultySelection value={difficulty} onChange={handleDifficultyChange}/>
                        {errors.difficulty && <SecondStyledErrorMessage>{errors.difficulty}</SecondStyledErrorMessage>}
                        {files.length < 3 && (<FormInput type="file" id="file" name="files" label="+ Montrez nous vos photos !" $isInvalid={!!errors.files} onChange={handleFileChange} $customStyles={LabelFileStyled} $inputStyles={InputFileStyled} />)}
                        {errors.files && <StyledErrorMessage>{errors.files}</StyledErrorMessage>}
                        <>
                            {files.map((file, index) => (
                                <FileWrapper key={index}>
                                    <span>{file.name}</span>
                                    <DeleteButton onClick={() => removeFile(index)}>Supprimer</DeleteButton>
                                </FileWrapper>
                            ))}
                        </>
                        <SubmitInput type="submit" value="Envoyer" disabled={isLoading} />
                    </form>
                    {isLoading && <Loader />}
                    {isError && <ErrorMessage>Une erreur s'est produite. Veuillez réessayer.</ErrorMessage>}
            </ModalContainer>
        </ModalOverlay>
    );
};

export default AddCommentsModal;
