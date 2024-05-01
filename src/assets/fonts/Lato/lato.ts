import { css } from 'styled-components'
import LatoRegular from './Lato-Regular.ttf';
import LatoBold from './Lato-Bold.ttf';

export const latoRegular = css`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular}) format('ttf');
  }
`;

export const latoBold = css`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoBold}) format('ttf');
  }
`;