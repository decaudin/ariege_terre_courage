import styled from "styled-components";
import { useTheme } from "../../../../utils/hooks/context/Theme/index.js";
import { Subtitle, Paragraph } from "../../../ui/Text/index.jsx";

const ParagraphGuest = styled(Paragraph)`
    @media (max-width: 600px) {
        text-align: center;
    }    
`

const SubtitleGuest = styled(Subtitle)`
    @media (max-width: 600px) {
        text-align: center;
    }
`

const HomeGuest = () => {

    const { theme } = useTheme();

    return (
        <>
            <SubtitleGuest theme={theme}>Bienvenue sur ce site consacré aux promenades et randonnées en Couserans !</SubtitleGuest>
            <ParagraphGuest theme={theme}>Vous y trouverez des promenades et randonnées pour tous les niveaux, situées dans la partie sud du Couserans principalement dans la vallée du Garbet, mais également de l'Arac, d'Ustou et de Salau.</ParagraphGuest>
            <ParagraphGuest theme={theme}>Retrouvez l'ensemble des randonnées sur une carte interactive ainsi que les détails pour chacune avec photos, description, distance, dénivelé, durée ..</ParagraphGuest>
            <ParagraphGuest theme={theme}>J'espère que le site vous plaira, n'hésitez pas à vous inscrire afin de pouvoir donner votre avis et partager vos expériences avec la communauté.</ParagraphGuest>
            <ParagraphGuest theme={theme}>Vous pouvez également me laisser un message via le formulaire de contact si vous avez une suggestion ou une remarque dont vous voulez me faire part, ou si vous voulez tout simplement discuter.</ParagraphGuest>
            <ParagraphGuest theme={theme}>Je vous souhaite une bonne navigation et surtout de bonnes randonnées dans ce magnifique pays qu'est le Couserans !</ParagraphGuest>
        </>
    )
}

export default HomeGuest