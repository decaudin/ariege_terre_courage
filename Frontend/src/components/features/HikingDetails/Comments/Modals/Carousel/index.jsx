/*import styled from "styled-components";
import { useState } from "react";

const CarouselWrapper = styled.div`
    position: relative;
`

const CommentImage = styled.img`
    width: 90%;
    height: 404px;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 10px;
`

const NavigationButton = styled.button`
    position: absolute;
    top: 202px;
    background: rgba(255, 255, 255, 0.5);
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: white;
    padding: 10px;
    z-index: 2;
    transform: translateY(-50%);
    transition: background 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
`

const PrevButton = styled(NavigationButton)`
    left: 40px;
`

const NextButton = styled(NavigationButton)`
    right: 40px;
`

const ImageCounter = styled.div`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    border-radius: 5px;
`

const Carousel = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1);
    };

    const formattedImage = pictures[currentIndex].replace(/\\/g, '/');

    return (
        <CarouselWrapper>
            {pictures && <CommentImage src={`http://localhost:4000/${formattedImage}`} alt={`${currentIndex + 1}`} />}
            {pictures.length > 1 && (
                <>
                    <PrevButton onClick={handlePrev}>&#10094;</PrevButton>
                    <NextButton onClick={handleNext}>&#10095;</NextButton>
                    <ImageCounter>{currentIndex + 1}/{pictures.length}</ImageCounter>
                </>
            )}
        </CarouselWrapper>
    )
}

export default Carousel;*/


import styled from "styled-components";
import { useState } from "react";
import { NavigationButtons, NavigationButton } from "../../../../../ui/Button/NavigationButtons";

const CarouselWrapper = styled.div`
    position: relative;
`

const CommentImage = styled.img`
    width: 90%;
    height: 404px;
    margin-bottom: 10px;
    object-fit: cover;
    border-radius: 10px;
`

const WhiteNavigationButton = NavigationButton(styled)`
    top: 202px;
    background: rgba(255, 255, 255, 0.5);
    color: white;
    transform: translateY(-50%);
    transition: background 0.3s ease;
    
    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
`

const PrevButton = WhiteNavigationButton(styled)`
    left: 40px;
`

const NextButton = WhiteNavigationButton(styled)`
    right: 40px;
`

const ImageCounter = styled.div`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    border-radius: 5px;
`

const Carousel = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const formattedImage = pictures[currentIndex].replace(/\\/g, '/');

    return (
        <CarouselWrapper>
            {pictures && <CommentImage src={`http://localhost:4000/${formattedImage}`} alt={`${currentIndex + 1}`} />}
            {pictures.length > 1 && (
                <>
                    <NavigationButtons pictures={pictures} setCurrentIndex={setCurrentIndex} />
                    <ImageCounter>{currentIndex + 1}/{pictures.length}</ImageCounter>
                </>
            )}
        </CarouselWrapper>
    )
}

export default Carousel;