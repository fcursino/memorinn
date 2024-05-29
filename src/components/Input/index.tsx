import { InputContainer, InputText } from "./style"

interface InputProps {
  children?: React.ReactNode,
  changeSearch: (value: string) => void 
}

const Input: React.FC<InputProps> = ({ children, changeSearch }) => {

  return (
    <InputContainer>
      <InputText onChange={e => changeSearch(e.target.value.replace('  ', ' ').replace(' ', '+'))} />
      {children}
    </InputContainer>
  )
}
export default Input