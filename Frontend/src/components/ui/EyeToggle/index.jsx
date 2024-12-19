import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  right: 26%;
  color: white;
  cursor: pointer;

  @media (max-width: 600px) {
    right: 18%;
  }
`

export const EyeToggle = ({ isVisible, onToggle }) => <StyledIcon icon={isVisible ? faEye : faEyeSlash} onClick={onToggle} />

