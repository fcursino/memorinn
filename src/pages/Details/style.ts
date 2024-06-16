import styled from "styled-components";
import { latoBold } from "../../assets/fonts/Lato/lato";

export const DetailsBottomContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`

export const DetailsContainer = styled.div`
    margin: 10px 30px;
`

export const DetailsLeftContainer = styled.div`
  width: 65%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: auto;
    display: ruby;
  }
`

export const DetailsRightContainer = styled.div`
  width: 35%;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`

export const DetailsContentContainer = styled.div`
    margin: 30px 10px;
    max-width: 80%;
    text-align: justify;
    background-color: #F7F0E8;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    display: block;
    transform: scale(1);
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`

export const DetailsLogoTitle = styled.text`
  ${latoBold};
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  color: #B02D2A;
  font-weight: 700;
`

export const DetailsNoCommentsMessage = styled.text`
    ${latoBold};
    color: rgba(21, 19, 19, 0.15);
    font-size: 37px;
    font-family: 'Lato', sans-serif;
    position: relative;
    font-weight: 600;
`

export const DetailsBookTitle = styled.h2`
  ${latoBold};
  color: #151313;
  font-size: 37px;
  font-family: 'Lato', sans-serif;
  position: relative;
  font-weight: 600;
  max-width: 80%;
  text-align: start;

  @media screen and (max-width: 1000px) {
    text-align: center;
    max-width: 100%;
  }
`