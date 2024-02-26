import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useData, useTheme } from "../../utils/hooks";

const HikesWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.h2`
margin-top: 20px;
margin-bottom: 40px;
color: ${({ theme }) => (theme === 'light' ? '#1D6154' : '#ffffff')};
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
color: ${({ theme }) => (theme === 'light' ? '#1D6154' : '#ffffff')};
`

const ImageWrapper = styled.div`
display: flex;
margin-top: 50px;
width: 90%;
justify-content: space-between;
`

const Image = styled.img`
width: 30%;
height: auto;
`

const StyledLink = styled(Link)`
margin-top: 50px;
text-decoration: none;
background-color: #1D6154;
color: #ffffff;
border-radius: 2em;
padding: 15px 20px 15px 20px;
border: none;
cursor: pointer;
`


const HikingRetail = () => {

    const { data } = useData();

    const { theme } = useTheme();

    const { id } = useParams();

    const hikeDetails = data.find(hike => hike.id === String(id));

    if (!hikeDetails) {
        return <div>Randonnée non trouvée</div>;
    }

    return (
        <HikesWrapper>
            <Title theme={theme}>{hikeDetails.title}</Title>
            <Description theme={theme}>{hikeDetails.description}</Description>
            <Duration theme={theme}>Durée AR : {hikeDetails.duration} heure(s)</Duration>
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
        </HikesWrapper>
    );
}


export default HikingRetail;