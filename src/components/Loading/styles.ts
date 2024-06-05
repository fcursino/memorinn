import styled from "styled-components";
import { latoBold } from "../../assets/fonts/Lato/lato";
import { rotate } from "../../assets/animations/keyframes";

export const LoadingContainer = styled.div`
  padding: 20px;
`
export const LoadingIcon = styled.div`
  animation: ${rotate} 1.5s infinite;
`

export const LoadingMessage = styled.p`
${latoBold};
color: #151313;
font-size: 20px;
font-family: 'Lato', sans-serif;
position: relative;
font-weight: 600;
`