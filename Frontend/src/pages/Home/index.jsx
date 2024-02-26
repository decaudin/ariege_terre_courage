import styled from "styled-components";
import { useTheme } from "../../utils/hooks";

const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const HomeTitle = styled.h1`
margin-top: 50px;
maring-bottom: 30px;
color: ${({ theme }) => (theme === 'light' ? '#1D6154' : '#ffffff')};
`

const HomeSubtitle = styled.h2`
margin-bottom: 30px;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const HomeParagraph = styled.p`
width: 80%;
line-height: 1.5;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Home = () => {

    const { theme } = useTheme();

    return (
        <HomeWrapper>
            <HomeTitle theme={theme}>RANDONNEES EN COUSERANS</HomeTitle>
            <HomeSubtitle theme={theme}>Bienvenue sur ce site consacré aux promenades et randonnées en Couserans !</HomeSubtitle>
            <HomeParagraph theme={theme}>Vous y trouverez des idées de promenades et randonnées de niveaux débutants à intermédiaires situées dans la partie sud du Couserans principalement dans la vallée du Garbet, mais également de l'Arac, d'Ustou et de Salau.</HomeParagraph>
            <HomeParagraph theme={theme}>Vous pourrez retrouver l'ensemble des randonnées sur une carte interactive ainsi que les détails pour chaque randonnée avec photos, description, distances, dénivelés, durée ..</HomeParagraph>
            <HomeParagraph theme={theme}>Bonne navigation et bonnes randonnées dans ce magnifique pays qu'est le Couserans !</HomeParagraph>
        </HomeWrapper>
    )
};

export default Home;