import LogoError from "../../assets/Error.jpg";
import styled from "styled-components";
import { useTheme } from "../../utils/hooks/context";
import colors from "../../utils/style/colors";

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
`

const ErrorSubtitle = styled.h3`
    margin-top: 50px;
    color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
`

const Error = () => {

    const { theme } = useTheme();

    return (
        <ErrorWraper>
            <ErrorTitle theme={theme}>Oups ...</ErrorTitle>
            <ErrorIllustration src={LogoError} alt="logo page 404" />
            <ErrorSubtitle theme={theme}>Il semblerait que la page que vous cherchez n'existe pas</ErrorSubtitle>
        </ErrorWraper>
    )
}

export default Error;