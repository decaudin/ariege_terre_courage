import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Tooltip } from 'react-leaflet';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useData } from '../../../utils/hooks/context/Hikes';
import { Loader } from "../../ui/Loader"

const MapWrapper = styled.div`
    margin: auto;
    margin-top: 20px;
    width: 95%;
    height: 80vh;

    @media (max-width: 600px) {
      width: 100%;
    }
`

const StyledMapContainer = styled(MapContainer)`
    height: 100%;
    box-shadow: 3px 3px 8px rgb(207, 207, 207);
    border-radius: 5px;

    @media (max-width: 600px) {
      border-radius: 0;
    }
`

const HikesMap = () => {

    const initialLat = 42.86365629976034;
    const initialLon = 1.2015081078083822;

    const maxBounds = [
      [42.3, 0.5],
      [43.5, 1.8],
    ];

    const [path, setPath] = useState([]);

    const { data, isLoading } = useData();

    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoading) {
        const pathsWithId = data.map(hike => ({
          id: hike.id,
          name: hike.title,
          coordinates: hike.coordinates.map(coord => [parseFloat(coord.lat), parseFloat(coord.lon)])
        }));
        setPath(pathsWithId);
      }
    }, [data, isLoading]);
  
    const handleClick = (hikeId) => () => {
      navigate(`/hikes/${hikeId}`);
      window.scrollTo(0, 0);      
    };
    
    const handleMapClick = (e) => {
      e.originalEvent.stopPropagation();
    };

  return (
    <MapWrapper>
      {isLoading && <Loader />}
      <StyledMapContainer center={[initialLat, initialLon]} zoom={11} maxBounds={maxBounds} maxBoundsViscosity={1.0} onClick={handleMapClick}>
        <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://opentopomap.org/">OpenTopoMap</a>' />
        {path.map((hike, index) => (
          <Polyline key={index} positions={hike.coordinates} color="red" eventHandlers={{click: handleClick(hike.id)}}>
            <Tooltip>{hike.name}</Tooltip>
          </Polyline>
        ))}
      </StyledMapContainer>
    </MapWrapper>
  );
}

export default HikesMap;
