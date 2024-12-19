import styled from "styled-components";
import colors from "../../../utils/style/colors.js";

export const Subtitle = styled.h2`
    margin: auto;
    margin-bottom: 40px;
    color: ${({ theme }) => (theme === 'light' ? colors.backgroundDark : colors.primaryDark)};
`

export const Paragraph = styled.p`
    line-height: 1.5;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : colors.primaryDark)};
`