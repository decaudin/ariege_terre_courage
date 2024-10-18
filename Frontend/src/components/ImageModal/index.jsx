import { useState } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 80%;
  max-width: 800px;
  background: white;
  padding: 20px;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 95%;
  height: 550px;
  object-fit: cover;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  padding: 10px;
  z-index: 2;
`

const PrevButton = styled(NavigationButton)`
  left: 10px;
`;

const NextButton = styled(NavigationButton)`
  right: 10px;
`;

const ImageModal = ({ photos, title, currentIndex, onClose }) => {

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(currentIndex);

  const handlePrev = () => {
    setCurrentPhotoIndex((prevIndex) => prevIndex === 0 ? photos.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentPhotoIndex((prevIndex) => prevIndex === photos.length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ImageWrapper>
          <Image src={photos[currentPhotoIndex]} alt={`Photo ${title} ${currentPhotoIndex + 1}`} />
        </ImageWrapper>
        <PrevButton onClick={handlePrev}>&#10094;</PrevButton>
        <NextButton onClick={handleNext}>&#10095;</NextButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ImageModal;
