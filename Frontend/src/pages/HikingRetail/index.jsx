import styled from "styled-components";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useData, useTheme } from "../../utils/hooks";
import { Loader } from "../../utils/style/loader";
import React from "react"; // A voir si nécessaire ..
import colors from "../../utils/style/colors"

const HikesWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h2`
margin-top: 20px;
margin-bottom: 40px;
color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
`

const Text = styled.p`
margin-top: 20px;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Description = styled(Text)`
width: 80%;
line-height: 1.5;
margin-bottom: 40px;
`

const Duration = styled(Text)``

const Length = styled(Text)``

const Elevation = styled(Text)``

const ImagePresentation = styled.h3`
margin-top: 30px;
color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
`

const ImageWrapper = styled.div`
display: flex;
margin-top: 50px;
width: 90%;
justify-content: space-between;
`

const Image = styled.img`
width: 30%;
height: 284px;
object-fit: cover;
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


const HikingRetail = () => {

    const { data, isLoading } = useData();

    const { theme } = useTheme();

    const { id } = useParams();

    const navigate = useNavigate();

    const hikeDetails = data.find(hike => hike.id === String(id));

    const convertToHoursAndMinutes = (duration) => {
        const hours = Math.floor(duration);
        const minutes = Math.round((duration - hours) * 60);
        if (minutes === 0) {
            return `${hours}h`;
        } else {
            return `${hours}h${minutes}min`;
        }
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
                    <Title theme={theme}>{hikeDetails.title}</Title>
                    <Description theme={theme}>{hikeDetails.description}</Description>
                    <Duration theme={theme}>Durée AR : {convertToHoursAndMinutes(hikeDetails.duration)}</Duration>
                    <Length theme={theme}>Distance totale : {hikeDetails.length} km</Length>
                    <Elevation theme={theme}>Altitude de départ: {hikeDetails.elevationStart} mètres</Elevation>
                    <Elevation theme={theme}>Altitude d'arrivée: {hikeDetails.elevationEnd} mètres</Elevation>
                    <ImagePresentation theme={theme}>Un aperçu des paysages :</ImagePresentation>
                    <ImageWrapper>
                        {hikeDetails.imageUrls.map(imageUrl => (
                            <Image key={imageUrl} src={process.env.PUBLIC_URL + imageUrl} alt={imageUrl} />
                        ))}
                    </ImageWrapper>
                    <StyledLink to="/hikes">Revenir à la liste des randonnées</StyledLink>
                </>
            )}
        </HikesWrapper>
    );
}


export default HikingRetail;