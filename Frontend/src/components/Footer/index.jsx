import styled from "styled-components";
import { useTheme } from "../../utils/hooks/context/Theme";
import ThemeToggle from "../ThemeToggle";

const FooterWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 50px;

  @media (max-width: 768px) {
      height: 25vh;
      flex-direction: column-reverse;
  }
`

const FooterParagraph = styled.p`
  margin: auto;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const NightModeButton = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Footer = () => {

    const { theme } = useTheme();

    return (
        <FooterWrapper>
            <FooterParagraph theme={theme}>© 2024 Decaudin Xavier. Tous droits réservés.</FooterParagraph>
            <NightModeButton theme={theme} >
                Changer de mode :
                <ThemeToggle />
            </NightModeButton>
        </FooterWrapper>
    )
}

export default Footer;