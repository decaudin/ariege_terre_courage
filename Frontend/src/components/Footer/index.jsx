import styled, { keyframes, css } from "styled-components";
import { useTheme } from "../../utils/hooks";

const rotateSunMoon = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const FooterWrapper = styled.div`
display: flex;
margin-bottom: 10px;
margin-top: 50px;
`

const FooterParagraph = styled.p`
margin: auto;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const NightModeButton = styled.p`
margin: auto;
cursor: pointer;
display: inline-block;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const SunMoonIcon = styled.span`
  display: inline-block;
  transform-origin: center;
  ${({ theme }) => theme === "light" ? "" : css`animation: ${rotateSunMoon} 0.3s linear;`}
`;

const Footer = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <FooterWrapper>
            <FooterParagraph theme={theme}>© 2024 Decaudin Xavier. Tous droits réservés.</FooterParagraph>
            <NightModeButton theme={theme} onClick={toggleTheme}>
                Changer de mode : 
                <SunMoonIcon>{theme === "light" ? "☀️" : "🌙"}</SunMoonIcon>
            </NightModeButton>
        </FooterWrapper>
    )
}

export default Footer;