// import { HourglassEmpty } from "@material-ui/icons"
import { TbHourglassEmpty } from "react-icons/tb"
import { LoadingContainer, LoadingIcon, LoadingMessage } from "./styles"

interface LoadingProps {
  message: string
}

const Loading: React.FC<LoadingProps> = ({message}) => {
  return (
    <LoadingContainer>
      <LoadingIcon>
        <TbHourglassEmpty fontSize="large" color="#151313" />
      </LoadingIcon>
      <LoadingMessage>
        {message}
      </LoadingMessage>
    </LoadingContainer>
  )
}
export default Loading