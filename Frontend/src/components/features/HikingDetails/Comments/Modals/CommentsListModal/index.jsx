import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import EditionMode from "../EditionMode";
import { ModalOverlay, ModalContainer } from "../../../../../ui/Modal";
import { CloseButton } from "../../../../../ui/Button/CloseButton";
import { ErrorMessage } from "../../../../../ui/ErrorMessage";
import Carousel from "../Carousel";
import { NavigationButton, NavigationButtons } from "../../../../../ui/Button/NavigationButtons";
import useFetchComments from "../../../../../../utils/hooks/apiRequest/Comments/GetComment";
import useDeleteComment from"../../../../../../utils/hooks/apiRequest/Comments/DeleteComment";
import { useAuth } from "../../../../../../utils/hooks/context/Auth";
import { Loader } from "../../../../../ui/Loader";
import colors from "../../../../../../utils/style/colors";

const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 325px) {
        flex-direction: column;
    }
`

const CommentAuthor = styled.h3`
    color: ${colors.primaryLight};
    margin-right: 20px;
`

const HikeDate = styled.p`
    margin: 25px 0;
`

const HikeComment = styled.div`
    width: 90%;
    margin: auto;
    margin-bottom: 25px;
`

const HikeDuration = styled.p`
    margin: 25px 0;
`

const InterestWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const Star = styled.span`
    font-size: 30px;
    margin-top: -13px;
    color: ${({ $isChecked }) => ($isChecked ? '#FFD700' : '#ccc')};
`

const NoComments = styled.p`
    line-height: 25px;
    padding: 20px 0;
`

const BaseButton = styled(NavigationButton)`
  top: 50%;
  background: none;
`

const PrevButton = styled(BaseButton)`
  left: 8px;
`

const NextButton = styled(BaseButton)`
  right: 8px;
`

const CommentsListModal = ({ onClose }) => {

    const { id } = useParams();
    const { fetchComments, data, isLoading, isError } = useFetchComments('http://localhost:4000/api/comment/get');
    const { deleteComment, isDeleteLoading, isDeleteError } = useDeleteComment('http://localhost:4000/api/comment/delete');
    const { user } = useAuth();
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    useEffect(() => {
        fetchComments(id);
    }, [fetchComments, id]);    

    const commentsForHike = data || [];
    const isUserCommentOwner = user?.id === commentsForHike[currentCommentIndex]?.userId;

    const handleDeleteComment = async () => {
        const commentId = commentsForHike[currentCommentIndex]?._id;
        const result = await deleteComment(commentId)
        if (result) {
            toast.success('Votre commentaire a été supprimé avec succès !', { autoClose :3000, style: { marginTop: '30px' }, position: "top-right" });
            onClose();
        } else {
            toast.error('Une erreur est survenue lors de la suppression de votre commentaire.', { autoClose :3000, style: { marginTop: '30px' }, position: "top-right" });
        }
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer width="800px" onClick={(e) => e.stopPropagation()}>
                <CloseButton onClose={onClose} />
                {isLoading && <Loader />}
                {isError ? (
                    <ErrorMessage>Une erreur s'est produite lors du chargement des commentaires</ErrorMessage>
                ) : commentsForHike.length > 0 ? (
                        <>
                            <CommentHeader>
                                <CommentAuthor>Commentaire de : {commentsForHike[currentCommentIndex].userName}</CommentAuthor>
                                <EditionMode isVisible={isUserCommentOwner} onDeleteConfirm={handleDeleteComment} isLoading={isDeleteLoading} isError={isDeleteError}/>
                            </CommentHeader>
                            <HikeDate>{new Date(commentsForHike[currentCommentIndex].date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</HikeDate>
                            <HikeComment>{commentsForHike[currentCommentIndex].comment}</HikeComment>
                            <p>Difficulté : {commentsForHike[currentCommentIndex].difficulty}</p>
                            <HikeDuration>Durée : {commentsForHike[currentCommentIndex].duration.hours === 0 ? '' : `${commentsForHike[currentCommentIndex].duration.hours}h`} {commentsForHike[currentCommentIndex].duration.minutes === 0 ? '' : `${commentsForHike[currentCommentIndex].duration.minutes}min`}</HikeDuration>
                            <InterestWrapper>Intérêt :
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Star key={index} $isChecked={index < commentsForHike[currentCommentIndex].rating}>★</Star>
                                ))}
                            </InterestWrapper>
                            <Carousel key={currentCommentIndex} pictures={commentsForHike[currentCommentIndex].files} hikeId={commentsForHike[currentCommentIndex].hikeId} />
                            {commentsForHike.length > 1 && (
                                <NavigationButtons pictures={commentsForHike} setCurrentIndex={setCurrentCommentIndex} PrevButton={PrevButton} NextButton={NextButton} />
                            )}
                        </>
                ) : (
                    <NoComments>Il n'y a pas encore de commentaires pour cette randonnée. N'hésitez pas à partager votre expérience avec nous !</NoComments>
                )}
            </ModalContainer>
        </ModalOverlay>
    );
};

export default CommentsListModal;

