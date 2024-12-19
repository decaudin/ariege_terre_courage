import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../../utils/hooks/context/Theme";

const LinkWrapper = styled(Link)`
    margin: auto;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 115px;
`

const ContactLink = () => {

    const { theme } = useTheme();

    return (
        <LinkWrapper theme={theme} to="/contact">
            <FontAwesomeIcon icon={faEnvelope} />
            Ecrivez-moi
        </LinkWrapper>
    )
}

export default ContactLink;