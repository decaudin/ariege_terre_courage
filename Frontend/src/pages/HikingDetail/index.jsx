import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useData, useTheme } from "../../utils/hooks/context";
import { Loader } from "../../utils/style/loader";
import colors from "../../utils/style/colors";
import ImageModal from "../../components/ImageModal";
import HikeDescription from "../../components/HikeDescription";
import HikeImage from "../../components/HikeImage";

const HikesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledLink = styled(Link)`
    margin-top: 50px;
    text-decoration: none;
    background-color: ${colors.primary};
    color: #ffffff;
    border-radius: 2em;
    padding: 15px 20px 15px 20px;
    border: none;
    cursor: pointer;
`

const HikingDetail = () => {

    const { data, isLoading } = useData();

    const { theme } = useTheme();

    const { id } = useParams();

    const navigate = useNavigate();

    const hikeDetails = data.find(hike => hike.id === String(id));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImageIndex(null);
    };

    useEffect(() => {
        if (!isLoading && !hikeDetails) {
          navigate("/Error");
        }
    }, [isLoading, hikeDetails, navigate]); 

    return (
        <HikesWrapper>
            {isLoading && <Loader theme={theme} />}
            {hikeDetails && (
                <>
                    <HikeDescription hikeDetails={hikeDetails} />
                    <HikeImage hikeDetails={hikeDetails} setSelectedImageIndex={setSelectedImageIndex} setIsModalOpen={setIsModalOpen} />
                    {isModalOpen && (
                        <ImageModal photos={hikeDetails.imageUrls} title={hikeDetails.title} currentIndex={selectedImageIndex} onClose={closeModal} />
                    )}
                    <StyledLink to="/hikes">Revenir à la liste des randonnées</StyledLink>
                </>
            )}
        </HikesWrapper>
    );
}


export default HikingDetail;