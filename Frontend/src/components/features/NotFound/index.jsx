import LogoError from "../../../assets/Error.jpg";
import styled from "styled-components";
import { useTheme } from "../../../utils/hooks/context/Theme";
import colors from "../../../utils/style/colors";

const ErrorWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorTitle = styled.h2`
    margin-top: 50px;
    margin-bottom: 50px;
    color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
`

const ErrorIllustration = styled.img`
    width: 50%;
    height: auto;

    @media (max-width: 768px) {
        width: 75%;
    }
`

const ErrorSubtitle = styled.h3`
    margin-top: 50px;
    color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};

    @media (max-width: 768px) {
        width: 80%;
        text-align: center;
    }
`

const NotFound = () => {

    const { theme } = useTheme();

    return (
        <ErrorWraper>
            <ErrorTitle theme={theme}>Oups ...</ErrorTitle>
            <ErrorIllustration src={LogoError} alt="logo page 404" />
            <ErrorSubtitle theme={theme}>Il semblerait que la page que vous cherchez n'existe pas</ErrorSubtitle>
        </ErrorWraper>
    )
}

export default NotFound;