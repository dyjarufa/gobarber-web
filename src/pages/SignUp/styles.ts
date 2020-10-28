import styled from 'styled-components';
import { shade } from 'polished'; // polished manipluda cor do css

import sigUpBackgroundImg from '../../assets/singn-up-background.png';

export const Container = styled.div`
  height: 100vh; /** viewport hight - ocupa a altura total da minha tela */

  display: flex;
  align-items: stretch; /** os item que estiverem dentro do meu container terão o tamanho total da pagina "100vh" */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center; //** centralizar o meu conteudo */

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /** Esse sinal de maior informa que quero estilizar o "a" diretamente de dentro do meu content e não mais um nível ou o "a" seguinte
   dessa forma minha estilização afeta apenas o meu "a" que esta fora do form*/
  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1; //** ocupa todo o espaço restante */
  background: url(${sigUpBackgroundImg}) no-repeat center;
  background-size: cover; //** ocupa os espaços que estão sobrando em cima e em baixo e nas laterais */
`;
