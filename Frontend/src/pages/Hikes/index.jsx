import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme, useData } from "../../utils/hooks";

const HikesWrapper = styled.ul`
`

const HikesList = styled.li`
list-style-type: none;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Hikes = () => {

    const { theme } = useTheme();
    const { data } = useData();

    return (
        <HikesWrapper>
            {data.map(hike => (
                <HikesList key={hike.id}>
                    <StyledLink theme={theme} to={`/hikes/${hike.id}`}>{hike.title}</StyledLink>
                </HikesList>
            ))}
        </HikesWrapper>
    )
}

export default Hikes;