import styled from "styled-components";
import colors from "../../../../utils/style/colors";
import { useTheme } from "../../../../utils/hooks/context/Theme";

const Title = styled.h2`
    margin-top: 20px;
    margin-bottom: 40px;
    color: ${({ theme }) => (theme === 'light' ? colors.primaryLight : colors.primaryDark)};
`

const Text = styled.p`
    margin-top: 20px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : colors.primaryDark)};
`

const Description = styled(Text)`
    width: 90%;
    line-height: 1.5;
    margin-bottom: 40px;
`

const Duration = styled(Text)``

const Length = styled(Text)``

const Elevation = styled(Text)``

const ImagePresentation = styled.h3`
    margin-top: 30px;
    color: ${({ theme }) => (theme === 'light' ? colors.primaryLight : colors.primaryDark )};
`

const HikeDescription = ({hikeDetails}) => {

    const { theme } = useTheme();

    const convertToHoursAndMinutes = (duration) => {
        const hours = Math.floor(duration);
        const minutes = Math.round((duration - hours) * 60);
        if (minutes === 0) {
            return `${hours}h`;
        } else {
            return `${hours}h${minutes}min`;
        }
    };

    return (
        <>
            <Title theme={theme}>{hikeDetails.title}</Title>
            <Description theme={theme}>{hikeDetails.description}</Description>
            <Duration theme={theme}>Durée AR : {convertToHoursAndMinutes(hikeDetails.duration)}</Duration>
            <Length theme={theme}>Distance totale : {hikeDetails.length} km</Length>
            <Elevation theme={theme}>Altitude de départ: {hikeDetails.elevationStart} mètres</Elevation>
            <Elevation theme={theme}>Altitude d'arrivée: {hikeDetails.elevationEnd} mètres</Elevation>
            <ImagePresentation theme={theme}>Un aperçu des paysages :</ImagePresentation>
        </>
    )
}

export default HikeDescription;