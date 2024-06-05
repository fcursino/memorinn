import { HourglassEmpty } from "@material-ui/icons"
import { LoadingContainer, LoadingIcon, LoadingMessage } from "./styles"

interface LoadingProps {
  message: string
}

const Loading: React.FC<LoadingProps> = ({message}) => {
  return (
    <LoadingContainer>
      <LoadingIcon>
        <HourglassEmpty fontSize="large" htmlColor="#151313" />
      </LoadingIcon>
      <LoadingMessage>
        {message}
      </LoadingMessage>
    </LoadingContainer>
  )
}
export default Loading