import styled from "styled-components";
import colors from "../../../../utils/style/colors";
import { useTheme } from "../../../../utils/hooks/context/Theme";

const StyledButton = styled.button`
    margin-top: 50px;
    text-decoration: none;
    background-color: ${({ theme }) => (theme === 'light' ? colors.primaryLight : colors.primaryDark)};
    color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#000000')};
    border-radius: 2em;
    padding: 15px 40px;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const Button = ({ onClick, children }) => {

    const { theme } = useTheme()

    return (<StyledButton theme={theme} onClick={onClick}>{children}</StyledButton>)
}

export default Button;