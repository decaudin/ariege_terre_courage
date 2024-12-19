import styled from "styled-components";
import { useAuth } from "../../../../utils/hooks/context/Auth";
import { Subtitle, Paragraph } from "../../../ui/Text";
import { useTheme } from "../../../../utils/hooks/context/Theme/index.js";

const SubtitleUser = styled(Subtitle)`
    text-align: center;
`

const ParagraphUser = styled(Paragraph)`
    text-align: center;
`

const HomeUser = () => {

    const { theme } = useTheme();
    const { user } = useAuth();

    return (
        <>
            <SubtitleUser theme={theme}>Bonjour {user.name} ! Heureux de vous revoir sur votre site de randonnée !</SubtitleUser>
            <ParagraphUser theme={theme}>Vous avez manqué à la communauté !</ParagraphUser>
            <ParagraphUser theme={theme}>Envie d'explorer de nouvelles aventures ?</ParagraphUser>
            <ParagraphUser theme={theme}>N'hésitez pas à regarder si de nouvelles randonnées ont été ajoutées ou à partager vos avis sur celles que vous avez déjà testées.</ParagraphUser>
            <ParagraphUser theme={theme}>Si vous avez des idées ou des suggestions, ou si vous souhaitez discuter, je suis à votre écoute, via le formulaire de contact.</ParagraphUser>
            <ParagraphUser theme={theme}>Profitez de votre visite et de vos prochaines randonnées !</ParagraphUser>           
        </>
    )
}

export default HomeUser;