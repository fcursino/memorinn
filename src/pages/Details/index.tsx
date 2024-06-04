import Logo from "../../components/Logo"
import { DetailsBottomContainer, DetailsContainer, DetailsContentContainer, DetailsLeftContainer, DetailsLogoTitle, DetailsNoCommentsMessage, DetailsRightContainer } from "./style"

function Details () {
  return (
    <DetailsContainer>
      <Logo>
        <DetailsLogoTitle>
          MemorInn
        </DetailsLogoTitle>
      </Logo>
      <DetailsBottomContainer>
        <DetailsLeftContainer>
          <DetailsContentContainer>
          <p>Lorem ipsum dolor sit amet.r sit amet.sdfsadfs asfasrase serwrwe4 eraserwe we  werwerr. Lorem ipsum dolor sit amet.r sit amet.sdfsadfs asfasrase serwrwe4 eraserwe we  werwerr. Lorem ipsum dolor sit amet.r sit amet.sdfsadfs asfasrase serwrwe4 eraserwe we  werwerr. Lorem ipsum dolor sit amet.r sit amet.sdfsadfs asfasrase serwrwe4 eraserwe we  werwerr. Lorem ipsum dolor sit amet.r sit amet.sdfsadfs asfasrase serwrwe4 eraserwe we  werwerr. </p>
          </DetailsContentContainer>
        </DetailsLeftContainer>
        <DetailsRightContainer>
          <DetailsNoCommentsMessage>
            Ainda não temos nenhum comentário sobre este livro
          </DetailsNoCommentsMessage> 
        </DetailsRightContainer>
      </DetailsBottomContainer>
    </DetailsContainer>
  )
}
export default Details