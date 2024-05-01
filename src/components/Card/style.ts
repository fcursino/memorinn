import styled from "styled-components";
import {latoRegular} from '../../assets/fonts/Lato/lato'

interface CardContainerProps {
    marginTop: number;
  }

export const CardContainer = styled.div<CardContainerProps>`
    margin: 0 10px;
    background-color: #F7F0E8;
    height: 250px;
    width: 170px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    display: block;
    transform: scale(1);
    transition: all .3s ease-in-out;
    margin-top: ${(props: { marginTop: number }) => props.marginTop}px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`

export const CardTitle = styled.h3`
    ${latoRegular};
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    border: none;
    color: #151313;
`

export const CardContent = styled.div`
    text-align: justify;
`