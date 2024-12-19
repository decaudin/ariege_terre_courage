import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "../../../utils/hooks/context/Theme";
import { useData } from "../../../utils/hooks/context/Hikes";
import { Loader } from "../../../components/ui/Loader"

const HikesWrapper = styled.ul`
    width: 90%;
    margin: auto;
    margin-top: 20px;
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px 10px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 420px) {
        width: 100%;
    }
`

const HikesList = styled.li`
    list-style-type: none;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const Title = styled.h2`
    color: white;
    position: absolute;
    top: -10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
`

const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: ${({ theme }) => (theme === 'light' ? '3px 3px 8px rgb(0,0,0)' : '0 0 15px rgba(255, 255, 255, 0.6)')};
`

const Hikes = () => {

    const { theme } = useTheme();
    const { data, isLoading } = useData();

    return (
        <HikesWrapper>
            {isLoading && <Loader theme={theme} />} 
            {data.map(hike => (
                <HikesList key={hike.id}>
                    <StyledLink to={`/hikes/${hike.id}`}>
                        <Title>{hike.title}</Title>
                        {<Image theme={theme} key={hike.imageUrls[0]} src={process.env.PUBLIC_URL + hike.imageUrls[0]} alt={hike.imageUrls[0]} />}
                    </StyledLink>
                </HikesList>
            ))}
        </HikesWrapper>
    )
}

export default Hikes;


/*import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTheme, useData } from "../../utils/hooks";
import { Loader } from "../../utils/style/loader";
import colors from "../../utils/style/colors";
import { useRef, useEffect } from "react";

const HikesWrapper = styled.ul`
    width: 90%;
    margin: auto;
    margin-top: 20px;
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 10px;
`;

const HikesList = styled.li`
    list-style-type: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    perspective: 1000px;
`;

const Title = styled.h2`
    color: white;
    position: absolute;
    top: -10px;

    &:hover {
        color: ${colors.primary};
        font-weight: bold;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 3px 3px 8px rgb(0, 0, 0);
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease;
`;

const Hikes = () => {
  const { theme } = useTheme();
  const { data, isLoading } = useData();

  // Référence pour accéder à chaque StyledLink
  const linksRef = useRef([]);

  useEffect(() => {

    linksRef.current.forEach((el, index) => {
      if (el) {
        const handleMouseMove = (e) => {
          const elRect = el.getBoundingClientRect();
          const x = e.clientX - elRect.x;
          const y = e.clientY - elRect.y;
          const midCardWidth = elRect.width / 2;
          const midCardHeight = elRect.height / 2;

          const angleY = -(x - midCardWidth) / 6;
          const angleX = (y - midCardHeight) / 6;

          el.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        };

        const handleMouseLeave = () => {
          el.children[1].style.transform = `rotateX(0) rotateY(0) scale(1)`;
        };

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          el.removeEventListener("mousemove", handleMouseMove);
          el.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });
  }, [data]); // Effet réinitialisé lorsque les données changent

  return (
    <HikesWrapper>
      {isLoading && <Loader theme={theme} />}
      {data.map((hike, index) => (
        <HikesList key={hike.id}>
          <StyledLink
            ref={(el) => (linksRef.current[index] = el)} // Référence à chaque StyledLink
            theme={theme}
            to={`/hikes/${hike.id}`}
          >
            <Title>{hike.title}</Title>
            <Image
              key={hike.imageUrls[0]}
              src={process.env.PUBLIC_URL + hike.imageUrls[0]}
              alt={hike.imageUrls[0]}
            />
          </StyledLink>
        </HikesList>
      ))}
    </HikesWrapper>
  );
};

export default Hikes; */
