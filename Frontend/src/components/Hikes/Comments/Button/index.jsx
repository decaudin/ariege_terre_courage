import styled from "styled-components";
import colors from "../../../../utils/style/colors";
import { useTheme } from "../../../../utils/hooks/context/Theme";

const StyledButton = styled.button`
    margin-top: 50px;
    text-decoration: none;
    background-color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
    color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#000000')};
    border-radius: 2em;
    padding: 15px 0px 15px 0px;
    width: ${({ width }) => width || '15vw'};
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const Button = ({onClick, children, width}) => {

    const { theme } = useTheme()

    return (<StyledButton theme={theme} onClick={onClick} width={width}>{children}</StyledButton>)
}

export default Button;