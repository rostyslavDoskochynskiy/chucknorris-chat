import styled from 'styled-components';
import { JSONTreeDescriber } from '@app/services';

export const Text = styled.i`
  font-family: monospace;
  text-align: center;
  margin: 0 10px 0 0;
  color: ${({ titleType }) => JSONTreeDescriber.setValueColorFor(titleType)};
`;
