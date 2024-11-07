import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import LoginToastMessage from "../LoginToastMessage";
import Button from "../Button";
import AddCommentsModal from "../Modals/AddCommentsModal";
//import CommentsList from "../CommentsList";
import { useAuth } from "../../../../utils/hooks/context/Auth"

const ButtonsWrapper = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-evenly;
`

const CommentsButtons = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();  

    const handleAddCommentClick = () => {
        if (!user) {
            toast.info(<LoginToastMessage navigate={navigate} />, { autoClose: 3500 });
        } else {
            setIsModalOpen(true);
        }
    };

    const closeCommentModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ButtonsWrapper>
                <Button onClick={handleAddCommentClick}>Ajouter mon expérience</Button>
                <Button>Découvrir les aventures</Button>
            </ButtonsWrapper>
            {isModalOpen && <AddCommentsModal onClose={closeCommentModal} /> }
        </> 
    )
}

export default CommentsButtons;