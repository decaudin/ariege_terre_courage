import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import LoginToastMessage from "../LoginToastMessage";
import Button from "../../../../ui/Button/CustomButton";
import AddCommentsModal from "../Modals/AddCommentsModal";
import CommentsListModal from "../Modals/CommentsListModal";
import { useAuth } from "../../../../../utils/hooks/context/Auth"

const ButtonsWrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const CommentsButtons = () => {

    const [isAddCommentsModalOpen, setIsAddCommentsModalOpen] = useState(false);
    const [isCommentsListModalOpen, setIsCommentsListModalOpen] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();  

    const handleAddCommentClick = () => {
        if (!user) {
            toast.info(<LoginToastMessage navigate={navigate} />, { autoClose: 3500 });
        } else {
            setIsAddCommentsModalOpen(true);
        }
    };

    const closeAddCommentsModal = () => {
        setIsAddCommentsModalOpen(false);
    };

    const handleCommentsListClick = () => {
        setIsCommentsListModalOpen(true);
    }

    const closeCommentsListModal = () => {
        setIsCommentsListModalOpen(false);
    };

    return (
        <>
            <ButtonsWrapper>
                <Button onClick={handleAddCommentClick}>Ajouter mon expérience</Button>
                <Button onClick={handleCommentsListClick}>Découvrir les aventures</Button>
            </ButtonsWrapper>
            {isAddCommentsModalOpen && <AddCommentsModal onClose={closeAddCommentsModal} /> }
            {isCommentsListModalOpen && <CommentsListModal onClose={closeCommentsListModal} /> }
        </> 
    )
}

export default CommentsButtons;