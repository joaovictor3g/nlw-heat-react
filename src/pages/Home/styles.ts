import styled, { css } from 'styled-components';
import backgroundImg from '../../assets/background.svg';

type MainProps = {
  hasSignedUser?: boolean;
}

export const Main = styled.main<MainProps>`
  height: 100vh;
  position: relative;

  ${props => props.hasSignedUser && css`
    &::before {
      content: '';
      height: 100vh;
      width: 420px;
      background: url(${backgroundImg}) no-repeat;
      background-size: cover;
      position: absolute;
      right: 0;
      top: 0;
    }
 `}
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
`;