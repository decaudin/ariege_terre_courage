import styled from "styled-components";

export const NavigationButton = styled.button`
    position: absolute;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    z-index: 2;
`

export const NavigationButtons = ({ pictures, setCurrentIndex, PrevButton, NextButton }) => {

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1);
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1);
    };

    return (
        <>
            <PrevButton onClick={handlePrev}>&#10094;</PrevButton>
            <NextButton onClick={handleNext}>&#10095;</NextButton>
        </>
    )
}