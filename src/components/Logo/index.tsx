import { LogoContainer, LogoImage } from "./style"
import logo from '../../assets/logo.svg'

interface LogoProps {
  children?: React.ReactNode
}

const Logo: React.FC<LogoProps> = ({ children }) => {
  return (
    <LogoContainer>
      <LogoImage src={logo} />
      {children}
    </LogoContainer>
  )
}
export default Logo