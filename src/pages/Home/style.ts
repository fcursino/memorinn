import { styled } from "styled-components";
import { latoBold } from "../../assets/fonts/Lato/lato";
import { fadeInUp } from "../../assets/animations/keyframes";


export const HomeBottomContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`

export const HomeContainer = styled.div`
    margin: 10px 30px;
`

export const HomeLogoContainer = styled.div`
  display: block;

  @media screen and (max-width: 1000px) {
    display: block;
    margin: 30px auto;
  }  
`

export const HomeLeftContainer = styled.div`
  width: 55%;
  margin: auto;
  position: relative;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`

export const HomeRightContainer = styled.div`
  width: 45%;
  margin: 0 50px;
  animation: ${fadeInUp} 0.7s ease-in-out;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`

export const HomeBooksList = styled.div`
  justify-content: center;
`

export const HomeFeaturedBooks = styled.div`
  display: flex;
  justify-content: center;
  height: 300px;
  margin: 30px 0;
`

export const HomeFeaturedBooksTitle = styled.h3`
  font-family: 'Lato', sans-serif;
  text-align: left;
  font-size: 20px;
  border: none;
  color: #151313;
  margin: 5px auto;
  max-width: 600px;
  position: relative;
`

export const HomeLogoTitle = styled.text`
  ${latoBold};
  font-size: 22px;
  font-family: 'Lato', sans-serif;
  color: #B02D2A;
  font-weight: 700;
`

export const HomeSearchTitle = styled.text`
  ${latoBold};
  text-align: left;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  color: #151313;
  font-weight: 700;
  display: block;
  max-width: 600px;
  margin: auto;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const HomeNoResultsMessage = styled.text`
    ${latoBold};
    color: rgba(21, 19, 19, 0.15);
    font-size:24px;
    display: inline-table;
    max-width: 300px;
    margin: 20px;
    font-family: 'Lato', sans-serif;
    position: relative;
    font-weight: 600;
`