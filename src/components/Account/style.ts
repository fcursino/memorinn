import styled from "styled-components";

export const AccountContainer = styled.div`
  margin: 5px 5px 5px auto;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: relative;
  width: fit-content;
`

export const AccountLoginButton = styled.button`
  background: #B02D2A;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  display: block;
  transform: scale(0.9);
  transition: all .1s ease-in-out;
  margin-left: auto;

  &:hover {
    transform: scale(1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`