import styled from 'styled-components';

export const Center = styled.div`
  position: absolute;
  width: 100%;
  height: ${({ height }) => (height ? height : '100%')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
