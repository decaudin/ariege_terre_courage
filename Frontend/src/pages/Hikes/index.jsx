import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme, useData } from "../../utils/hooks";
import { Loader } from "../../utils/style/loader"
import colors from "../../utils/style/colors"

const HikesWrapper = styled.ul`
`

const HikesList = styled.li`
list-style-type: none;
display: flex;
justify-content: center;
margin-bottom: 5px;
`

const StyledLink = styled(Link)`
text-decoration: none;
color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};

&:hover {
    color: ${colors.primary};
    font-weight: bold;
}
`

const Hikes = () => {

    const { theme } = useTheme();
    const { data, isLoading } = useData();

    return (
        <HikesWrapper>
            {isLoading && <Loader theme={theme} />} 
            {data.map(hike => (
                <HikesList key={hike.id}>
                    <StyledLink theme={theme} to={`/hikes/${hike.id}`}>{hike.title}</StyledLink>
                </HikesList>
            ))}
        </HikesWrapper>
    )
}

export default Hikes;