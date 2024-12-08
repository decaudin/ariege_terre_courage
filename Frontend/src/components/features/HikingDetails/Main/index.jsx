import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../../../../utils/hooks/context/Theme";
import { useData } from "../../../../utils/hooks/context/Hikes";
import { Loader } from "../../../ui/Loader";
import PhotosModal from "../Photos/PhotosModal";
import HikeDescription from "../HikeDescription";
import HikePhotos from "../Photos/HikePhotos";
import CommentsButtons from "../Comments/CommentsButtons";

const HikesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HikingDetailsMain = () => {

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
                    <HikePhotos hikeDetails={hikeDetails} setSelectedImageIndex={setSelectedImageIndex} setIsModalOpen={setIsModalOpen} />
                    {isModalOpen && (
                        <PhotosModal photos={hikeDetails.imageUrls} title={hikeDetails.title} currentIndex={selectedImageIndex} onClose={closeModal} />
                    )}
                    <CommentsButtons />
                </>
            )}
        </HikesWrapper>
    );
}

export default HikingDetailsMain;