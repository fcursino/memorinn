import styled from "styled-components";
import { latoBold } from '../../assets/fonts/Lato/lato'

export const InputContainer = styled.div`
  border: 2px solid #151313;
  border-radius: 8px;
  color: #151313;
  height: 39px;
  padding: 0 8px;
  max-width: 600px;
  display: flex;
  position: relative;
  align-items: center;
  background-color: transparent;
  margin: auto;
`

export const InputText = styled.input`
  ${latoBold};
  border: 0 solid transparent;
  border-radius: 8px;
  color: #151313;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  height: 39px;
  padding: 0 8px;
  width: 100%;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`