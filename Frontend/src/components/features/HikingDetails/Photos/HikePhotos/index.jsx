import styled from "styled-components";

const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 20px;
    margin-top: 50px;
    width: 90%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Image = styled.img`
    cursor: pointer;
    width: 100%;
    height: 284px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 3px 3px 8px rgb(207, 207, 207);
`

const HikePhotos = ({hikeDetails, setSelectedImageIndex, setIsModalOpen}) => {

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    return (
        <ImageWrapper>
            {hikeDetails.imageUrls.map((imageUrl, index) => (
                <Image key={imageUrl} src={process.env.PUBLIC_URL + imageUrl} alt={imageUrl} onClick={() => handleImageClick(index)}/>
            ))}
        </ImageWrapper>
    ) 
}

export default HikePhotos;