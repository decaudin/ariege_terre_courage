import styled from "styled-components";
import { useTheme } from "../../../utils/hooks/context/Theme";
import ContactLink from "../ContactLink";
import ThemeToggle from "../ThemeToggle";
import colors from "../../../utils/style/colors";

const FooterWrapper = styled.footer`
  display: flex;
  margin-bottom: 10px;
  margin-top: 50px;

  @media (max-width: 768px) {
      height: 27vh;
      flex-direction: column-reverse;
      margin-top: 40px;
  }

  @media (max-width: 450px) {
      height: 38vh;
  }
`

const FooterParagraph = styled.p`
  margin: auto;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : colors.primaryDark)};
`

const FooterSubWrapper = styled.div`
  display: flex;
  width: 62%;

  @media (max-width: 1024px) {
    width: 61%;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row-reverse;
  }

  @media (max-width: 450px) {
    flex-direction: column-reverse;
  }
`

const NightModeButton = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : colors.primaryDark)};

  @media (max-width: 450px) {
    margin-bottom: 30px;
  }
`

const Footer = () => {

    const { theme } = useTheme();

    return (
        <FooterWrapper>
            <FooterParagraph theme={theme}>© 2024 Decaudin Xavier. Fait avec ❤️</FooterParagraph>
            <FooterSubWrapper>
              <ContactLink />
              <NightModeButton theme={theme} >
                  Changer de mode :
                  <ThemeToggle />
              </NightModeButton>
            </FooterSubWrapper>
        </FooterWrapper>
    )
}

export default Footer;