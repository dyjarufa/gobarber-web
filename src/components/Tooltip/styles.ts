import styled from 'styled-components';

export const Container = styled.div`
  position: relative; // Todo position absolute dentro deste container será relativo ao container e não ao restante de tela

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.2s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px); //aqui fica um pouco a cima do ícone

    /*hack para centralizar */
    left: 50%;
    transform: translateX(-50%);
    color: #312e38;

    /* hack para criar uma flexinha no css >, v, > ,^ */
    &::before {
      content: ''; //para ser exibido em tela
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px; //hack para criar um triangulo
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
