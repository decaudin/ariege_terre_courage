import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  right: 124px;
  color: white;
  cursor: pointer;
`

export const EyeToggle = ({ isVisible, onToggle }) => <StyledIcon icon={isVisible ? faEye : faEyeSlash} onClick={onToggle} />

