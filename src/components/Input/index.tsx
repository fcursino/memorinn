import { InputContainer, InputText } from "./style"

interface InputProps {
  type?: string,
  value?: string,
  children?: React.ReactNode,
  placeholder?: string,
  changeSearch: (value: string) => void 
}

const Input: React.FC<InputProps> = ({ placeholder, type, value, children, changeSearch }) => {

  return (
    <InputContainer>
      <InputText 
        placeholder={placeholder} 
        type={type} 
        value={value} 
        onChange={e => changeSearch(e.target.value)} 
      />
      {children}
    </InputContainer>
  )
}
export default Input