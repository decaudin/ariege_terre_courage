import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ModalOverlay, ModalContainer } from "../../../../../ui/Modal";
import { Loader } from "../../../../../ui/Loader";
import { CloseButton } from "../../../../../ui/Button/CloseButton";
import Button from '../../../../../ui/Button/CustomButton';

const EditionContainer = styled.div`
    display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
    justify-content: space-between;
    width: 40px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
`;

const ButtonsContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`

const EditionMode = ({ isVisible, onDeleteConfirm, isLoading }) => {

    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const handleDeleteClick = () => setShowConfirmModal(true);

    const handleConfirmDelete = () => {
        onDeleteConfirm();
        setShowConfirmModal(false);
    };

    const handleCancelDelete = () => setShowConfirmModal(false);

    return (
        <>
            <EditionContainer $isVisible={isVisible}>
                <StyledFontAwesomeIcon icon={faPenToSquare} />
                <StyledFontAwesomeIcon icon={faTrashCan} onClick={handleDeleteClick} />
            </EditionContainer>

            {showConfirmModal && (
                <ModalOverlay onClick={handleCancelDelete}>
                    <ModalContainer onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClose={handleCancelDelete} />
                        <h3>Êtes-vous sûr de vouloir supprimer ce commentaire ?</h3>
                        <ButtonsContainer>
                            <Button onClick={handleConfirmDelete}>Oui</Button>
                            <Button onClick={handleCancelDelete}>Non</Button>
                        </ButtonsContainer>
                        {isLoading && <Loader />}
                    </ModalContainer>
                </ModalOverlay>
            )}
        </>
    );
};

export default EditionMode;
