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
  display: grid;
  place-items: center;

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

export const DetailsCommentContainer = styled.div`
  max-width: 80%;
  margin: 0 10px;
  position: relative;
  border: 2px solid #151313;
  border-radius: 8px;
`

export const DetailsCommentTextarea = styled.textarea`
  border: 0 solid transparent;
  border-radius: 8px;
  color: #151313;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  height: 50px;
  padding: 8px;
  width: -webkit-fill-available;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

export const DetailsCommentButton = styled.button`
  background: #B02D2A;
  margin: 10px;
  color: #fff;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: block;
  transform: scale(0.98);
  transition: all .1s ease-in-out;

  &:hover {
    transform: scale(1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`

export const DetailsCommentThread = styled.ul`
  background-color: #fff;
  height: 100%;
  width: 100%;
  position: relative;
  list-style-type: none;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
`

export const DetailsThreadComment = styled.li`
  background: transparent;
  text-align: justify;
  display: flex;
`

export const DetailsTextContainer = styled.div`
  color: #B02D2A;
  width: fit-content;
  position: relative;
  margin: 0 10px;
  text-align: left;
`

export const DetailsCommentEditButton = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  margin-left: 5px;
  padding: 5px;
  cursor: pointer;
`