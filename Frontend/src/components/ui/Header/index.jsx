import styled, { keyframes } from "styled-components";
import logo from '../../../assets/logo.webp';
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../../utils/hooks/context/Theme"; 
import colors from "../../../utils/style/colors";
import { useAuth } from "../../../utils/hooks/context/Auth";

const HeaderContainer = styled.header`
    display: flex;
    width: 90%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 50px;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LogoLink = styled(NavLink)`

    @media (max-width: 768px) {
        margin: auto;
        margin-bottom: 10px;
    }
`

const NavBar = styled.nav`
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        width: 32%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const underlineAnimation = keyframes`
    from {
        text-decoration: none;
    }
    to {
        text-decoration: underline;
    }
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    position: relative;

    &:hover {
        color: ${colors.primary};
        animation: ${underlineAnimation} 0.3s ease forwards;
    }

    &.active{
        font-weight: bold;
    }

    @media (max-width: 768px) {
        text-transform: uppercase;
        font-size: 15px;
    }    
`

const Logout = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    position: relative;

    &:hover {
        color: ${colors.primary};
        animation: ${underlineAnimation} 0.3s ease forwards;
    }

    @media (max-width: 768px) {
        text-transform: uppercase;
        font-size: 15px;
    }
`

const Header = () => {

    const { theme } = useTheme();
    const { user, logout } = useAuth();

    return (
        <HeaderContainer>
            <LogoLink to ="/">
                <img src={logo} alt="logo couserans" />
            </LogoLink>
            <NavBar>
                <StyledLink theme={theme} to="/">Accueil</StyledLink>
                <StyledLink theme={theme} to="/map">Carte</StyledLink>
                <StyledLink theme={theme} to="/hikes">Randonnées</StyledLink>
                {/*<StyledLink theme={theme} to="/contact">Contact</StyledLink>*/}
                {user ? (
                    <Logout theme={theme} onClick={logout}>Logout</Logout>
                ) : (
                    <StyledLink theme={theme} to="/login">Login</StyledLink>
                )}
            </NavBar>
        </HeaderContainer>
    )
}

export default Header;