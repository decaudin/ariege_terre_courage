import styled from "styled-components";
import { useTheme } from "../../utils/hooks/context/Theme";

const ToggleWrapper = styled.div`
    height: 50px;
    width: 100px;
    border-radius: 25px;
    background-image: ${({ theme }) => (theme === 'light' ? 'linear-gradient(aqua, skyblue)' : 'linear-gradient(midnightblue, rebeccapurple)')};
    display: inline-block;
    margin-left: 7px;
    position: relative;
    cursor: pointer; 
`

const SunOrMoonIcon = styled.span`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background: ${({ theme }) => (theme === 'light' ? 'yellow' : 'whitesmoke')};
    position: absolute;
    top: 2px;
    left: 2px;
    box-shadow: ${({ theme }) => (theme === 'light' ? '0 0 5px yellow' : '0 0 5px whitesmoke')};
    transform: ${({ theme }) => (theme === 'light' ? 'translate(0, 0)' : 'translate(50px, 0)')};
    transition: all 0.3s ease;
    z-index: 1;
`

const Crater = styled.div`
    background: burlywood;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4) inset;
    opacity: ${({ theme }) => (theme === 'light' ? '0' : '0.4')};

    &:first-child {
        left: 3px;
        top: 9.5px;
        height: 9.5px;
        width: 25px;
        transform: rotate(-45deg);
    }

    &:last-child {
        right: 2px;
        top: 12px;
        height: 9px;
        width: 18px;
        transform: rotate(45deg);
    }
`

const Shape = styled.div`
    position : absolute;
    background: ${({ theme }) => (theme === 'light' ? 'whitesmoke' : 'lightgray')};
    box-shadow: ${({ theme }) => (theme === 'light' ? '' : '0 0 10px 2px violet')};
    border-radius: 50%;
    transition: all 0.3s ease;
`

const ShapeSmall = styled(Shape)`
    height: ${({ theme }) => (theme === 'light' ? '2.5px' : '3.5px')};
    width: ${({ theme }) => (theme === 'light' ? '25px;' : '3.5px')};
    transform: ${({ theme }) => (theme === 'light' ? 'translate(0, 0)' : 'translate(-21px, 0)')};
    top: 50%;
    left: 60%;

    &:first-child {
        transform: ${({ theme }) => (theme === 'light' ? 'translate(0, 0)' : 'translate(-40px, -6px)')};
    }
`

const ShapeMedium = styled(Shape)`
    height: ${({ theme }) => (theme === 'light' ? '5px' : '6px')};
    width: ${({ theme }) => (theme === 'light' ? '37.5px;' : '6px')};
    transform: ${({ theme }) => (theme === 'light' ? 'translate(0, 0)' : 'translate(5px, 0)')};
    top: 25%;
    left: 25%;
    z-index: 2;
`

const ShapeLarge = styled(Shape)`
    height: ${({ theme }) => (theme === 'light' ? '7.5px' : '9px')};
    width: ${({ theme }) => (theme === 'light' ? '50px;' : '9px')};
    transform: ${({ theme }) => (theme === 'light' ? 'translate(0, 0)' : 'translate(-5px, 0)')};
    bottom: 9px;
    left: 26%;
`

const ThemeToggle = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <ToggleWrapper theme={theme} onClick={toggleTheme}>
            <SunOrMoonIcon theme={theme}>
                <Crater theme={theme}/>
                <Crater theme={theme}/>
            </SunOrMoonIcon>
            <>
                <ShapeSmall theme={theme}/>
                <ShapeSmall theme={theme}/>
                <ShapeMedium theme={theme}/>
                <ShapeLarge theme={theme}/>
            </>
        </ToggleWrapper>
    )
}

export default ThemeToggle;

