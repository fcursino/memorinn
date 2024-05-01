import { InputContainer, InputText } from "./style"

interface InputProps {
  children?: React.ReactNode
}

const Input: React.FC<InputProps> = ({ children }) => {
  return (
    <InputContainer>
      <InputText />
      {children}
    </InputContainer>
  )
}
export default Input