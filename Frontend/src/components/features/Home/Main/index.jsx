import styled from "styled-components";
import { useTheme } from "../../../../utils/hooks/context/Theme/index.js";
import { useAuth } from "../../../../utils/hooks/context/Auth";
import colors from "../../../../utils/style/colors.js";
import HomeGuest from "../HomeGuest";
import HomeUser from "../HomeUser/index.jsx";

const HomeWrapper = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: auto;
`

const HomeTitle = styled.h1`
    text-align: center;
    margin-bottom: 40px;
    color: ${({ theme }) => (theme === 'light' ? colors.primaryLight : colors.primaryDark)};
`

const HomeContent = () => {

    const { theme } = useTheme();
    const { user } = useAuth();

    return (
        <HomeWrapper>
            <HomeTitle theme={theme}>RANDONNEES EN COUSERANS</HomeTitle>
            {!user ? <HomeGuest /> : <HomeUser />}
        </HomeWrapper>
    )
};

export default HomeContent;