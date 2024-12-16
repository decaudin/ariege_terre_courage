import { useState } from 'react';
import styled from 'styled-components';
import { ModalOverlay, ModalContainer } from '../../../../ui/Modal';
import { CloseButton } from '../../../../ui/Button/CloseButton';
import { NavigationButton, NavigationButtons } from '../../../../ui/Button/NavigationButtons';

const ModalWrapper = styled(ModalOverlay)`
  width: 100vw;
  height: 100vh;
`

const ModalContent = styled(ModalContainer)`
  width: 80%;
  max-width: 800px;
  border-radius: 0px;
`

const Image = styled.img`
  width: 95%;
  height: 550px;
  object-fit: cover;
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

const PhotosModal = ({ photos, title, currentIndex, onClose }) => {

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(currentIndex);

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClose={onClose} />
        <Image src={photos[currentPhotoIndex]} alt={`${title} ${currentPhotoIndex + 1}`} />
        <NavigationButtons pictures={photos} setCurrentIndex={setCurrentPhotoIndex} PrevButton={PrevButton} NextButton={NextButton} />
      </ModalContent>
    </ModalWrapper>
  );
};

export default PhotosModal;
