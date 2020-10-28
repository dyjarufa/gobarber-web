import styled from 'styled-components';
import { shade } from 'polished'; // polished manipluda cor do css

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s; /** suavisar ao passar o mouse em cima */

  &:hover {
    background: ${shade(
      0.2,
      '#ff9000',
    )}; /** shade escure em 20% a cor que escolhi */
  }
`;
