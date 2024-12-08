import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ModalOverlay, ModalContainer } from "../../../../../ui/Modal";
import { CloseButton } from "../../../../../ui/Button/CloseButton";
import { ErrorMessage } from "../../../../../ui/ErrorMessage";
import Carousel from "../Carousel";
import useFetchComments from "../../../../../../utils/hooks/apiRequest/Comments/GetComment";
import { Loader } from "../../../../../ui/Loader";

const HikeDate = styled.p`
    margin : 10px 0;
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

const CommentsListModal = ({ onClose }) => {

    const {id} = useParams();

    const { fetchComments, data, isLoading, isError } = useFetchComments('http://localhost:4000/api/comment/get');

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    console.log(data)

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer width='800px' onClick={(e) => e.stopPropagation()}>
                <CloseButton onClose={onClose} />
                {isLoading && <Loader />}
                {isError && <ErrorMessage>Une erreur s'est produite lors du chargement des commentaires</ErrorMessage>}
                {data && Array.isArray(data) && (
                    <>
                        {data.filter(comment => comment.hikeId === id).length > 0 ? (
                            data.filter(comment => comment.hikeId === id).map(filteredComment => (
                                <div key={filteredComment._id}>
                                    <HikeDate>{new Date(filteredComment.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase()}</HikeDate>
                                    <p>{filteredComment.comment}</p>
                                    <p>Difficulté : {filteredComment.difficulty}</p>
                                    <p>Durée : {filteredComment.duration.hours === 0 ? '' : `${filteredComment.duration.hours}h`} {filteredComment.duration.minutes === 0 ? '' : `${filteredComment.duration.minutes}min`}</p>
                                    <InterestWrapper>Intérêt : 
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <Star key={index} $isChecked={index < filteredComment.rating}>★</Star>
                                        ))}
                                    </InterestWrapper>
                                    <Carousel pictures={filteredComment.files} />
                                </div>
                            ))
                        ) : (
                            <NoComments>Il n'y a pas encore de commentaires pour cette randonnée. N'hésitez pas à partager votre expérience avec nous !</NoComments>
                        )}
                    </>
                )}
            </ModalContainer>
        </ModalOverlay>
    );
};

export default CommentsListModal;

// IDEE : Si plus de 1 commentaires faire conditions comments.length > 1 et on affiche des fleches de navigation ( qu'on récupe de photosModal --> ui (générique)) 
// et on fait défiler les commentaires comme ceci plutot que de scroller en vertical
