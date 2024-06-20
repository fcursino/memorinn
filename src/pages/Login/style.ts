import styled from "styled-components";
import { latoBold } from "../../assets/fonts/Lato/lato";

export const LoginContainer = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
  min-width: 50%;
  border-radius: 20px;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  top: 50%;
  gap: 25px;
  height: fit-content;
  place-items: center;
  width: fit-content;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`

export const LoginLogoTitle = styled.text`
  ${latoBold};
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  color: #B02D2A;
  font-weight: 700;
`

export const LoginButton = styled.button`
  background: #B02D2A;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: block;
  transform: scale(0.9);
  transition: all .1s ease-in-out;

  &:hover {
    transform: scale(1);
  }
`