import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: ${({ width }) => width || '400px'};
    text-align: center;
    overflow-y: auto;
    max-height: 100%;
`;