import { InputContainer, InputText } from "./style"

interface InputProps {
  search?: string,
  children?: React.ReactNode,
  changeSearch: (value: string) => void 
}

const Input: React.FC<InputProps> = ({ search, children, changeSearch }) => {

  return (
    <InputContainer>
      <InputText value={search} onChange={e => changeSearch(e.target.value.replace('  ', ' ').replace(' ', '+'))} />
      {children}
    </InputContainer>
  )
}
export default Input