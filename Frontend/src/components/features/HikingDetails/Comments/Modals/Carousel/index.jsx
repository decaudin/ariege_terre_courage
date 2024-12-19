import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useData } from "../../../../../../utils/hooks/context/Hikes";
import { NavigationButton, NavigationButtons } from "../../../../../ui/Button/NavigationButtons";
import { Loader } from "../../../../../ui/Loader";

const CarouselWrapper = styled.div`
    position: relative;
`;

const CommentImage = styled.img`
    width: 90%;
    height: 404px;
    margin: 25px 0;
    object-fit: cover;
    border-radius: 10px;
`;

const BaseButton = styled(NavigationButton)`
    color: white;
    top: 202px;
    background: rgba(255, 255, 255, 0.5);
    transition: background 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
`;

const PrevButton = styled(BaseButton)`
    left: 5%;
`;

const PrevButtonMemo = React.memo(PrevButton);

const NextButton = styled(BaseButton)`
    right: 5%;
`;

const NextButtonMemo = React.memo(NextButton);

const ImageCounter = styled.div`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    border-radius: 5px;
`;

const Carousel = ({ pictures, hikeId }) => {

    const { data, isLoading } = useData();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [title, setTitle] = useState("");

    const formattedImage = pictures[currentIndex].replace(/\\/g, '/');

    useEffect(() => {

        const hike = data.find((hike) => hike.id === hikeId);
        if (hike) {
            setTitle(hike.title); 
        }
    }, [hikeId, data]);

    return (
        <CarouselWrapper>
            {isLoading && <Loader />}
            {pictures && <CommentImage key={currentIndex} src={`http://localhost:4000/${formattedImage}`} alt={`${title} ${currentIndex + 1}`} />}
            {pictures.length > 1 && (
                <>
                    <NavigationButtons pictures={pictures} setCurrentIndex={setCurrentIndex} PrevButton={PrevButtonMemo} NextButton={NextButtonMemo} />
                    <ImageCounter>{currentIndex + 1}/{pictures.length}</ImageCounter>
                </>
            )}
        </CarouselWrapper>
    );
};

export default Carousel;
