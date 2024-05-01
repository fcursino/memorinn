import { IconContainer } from "./style"

interface IconProps {
  children?: React.ReactNode,
  onClick?: () => void
}

const Icon: React.FC<IconProps> = ({ children, onClick }) => {
  return (
    <IconContainer onClick={onClick} >
      {children}
    </IconContainer>
  )
}
export default Icon