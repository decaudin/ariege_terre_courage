import styled, { keyframes } from "styled-components";
import logo from '../../assets/logo.webp';
import { Link } from "react-router-dom";
import { useTheme } from "../../utils/hooks"; 
import colors from "../../utils/style/colors"

const NavContainer = styled.div`
display: flex;
width: 90%;
margin: auto;
margin-top: 10px;
justify-content: space-between;
`

const NavBar = styled.div`
width: 18%;
display: flex;
justify-content: space-between;
align-items: center;
`

const underlineAnimation = keyframes`
    from {
        text-decoration: none;
    }
    to {
        text-decoration: underline;
    }
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
position: relative;

&:hover {
    color: ${colors.primary};
    animation: ${underlineAnimation} 0.3s ease forwards;
}
`

const Header = () => {

    const { theme } = useTheme();

    return (
        <NavContainer>
            <Link to ="/">
                <img src={logo} alt="logo couserans" />
            </Link>
            <NavBar>
                <StyledLink theme={theme} to="/">Accueil</StyledLink>
                <StyledLink theme={theme} to="/map">Carte</StyledLink>
                <StyledLink theme={theme} to="/hikes">Randonnées</StyledLink>
            </NavBar>
        </NavContainer>
    )
}

export default Header;