import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from '../../../assets/logo.webp';
import { useAuth } from "../../../utils/hooks/context/Auth";
import { useTheme } from "../../../utils/hooks/context/Theme"; 
import colors from "../../../utils/style/colors";

const HeaderContainer = styled.header`
    display: flex;
    width: 90%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 30px;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 600px) {
        width: 95%;
    }
`

const LogoLink = styled(NavLink)`

    @media (max-width: 768px) {
        margin: auto;
        margin-bottom: 20px;
    }
`

const NavBar = styled.nav`
    width: 324px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    const [hasLoggedOut, setHasLoggedOut] = useState(false);

    useEffect(() => {
        if (user === null && hasLoggedOut) {
            toast.success('Vous avez bien été déconnecté.');
        }
    }, [user, hasLoggedOut]);

    const handelLogout = () => {
        logout();
        setHasLoggedOut(true)
    }

    return (
        <HeaderContainer>
            <LogoLink to ="/">
                <img src={logo} alt="logo couserans" />
            </LogoLink>
            <NavBar>
                <StyledLink theme={theme} to="/">Accueil</StyledLink>
                <StyledLink theme={theme} to="/map">Carte</StyledLink>
                <StyledLink theme={theme} to="/hikes">Randonnées</StyledLink>
                {/* <StyledLink theme={theme} to="/contact">Contact</StyledLink> */}
                {user ? (
                    <Logout theme={theme} onClick={handelLogout}>Logout</Logout>
                ) : (
                    <StyledLink theme={theme} to="/login">Login</StyledLink>
                )}
            </NavBar>
        </HeaderContainer>
    )
}

export default Header;