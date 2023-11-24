'use client';

import styled from 'styled-components';

export const CenterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  aspect-ratio: 1;
  background-color: ${props => props.theme.colors.background};
`