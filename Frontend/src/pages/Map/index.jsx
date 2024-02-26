import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFetch } from '../../utils/hooks';

const MapWrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 95%;
  height: 100vh;
`

const StyledMapContainer = styled(MapContainer)`
width: 100%;
height: 100%;
`

const MapWithPath = () => {

    const initialLat = 42.86365629976034;
    const initialLon = 1.2015081078083822;

    const maxBounds = [
      [42.3, 0.5],
      [43.5, 1.8],
    ];

    const [path, setPath] = useState([]);

    const { data, isLoading } = useFetch('/Data/salau.json');

    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoading) {
        const coords = data.flatMap(item => item.coordinates.map(coord => [parseFloat(coord.lat), parseFloat(coord.lon)]));
        setPath(coords);
      }
    }, [data, isLoading]);
  
    const handleClick = () => {
      navigate('/hikes/:id');
    }; 

  return (
    <MapWrapper>
      <StyledMapContainer center={[initialLat, initialLon]} zoom={11} maxBounds={maxBounds} maxBoundsViscosity={1.0}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={path} color="blue" onClick={handleClick}/>
      </StyledMapContainer>
    </MapWrapper>
  );
}

export default MapWithPath;
