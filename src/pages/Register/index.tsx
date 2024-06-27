import { useEffect, useState } from "react"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { RegisterButton, RegisterContainer, RegisterLogoTitle, RegisterWarning } from "./style"
import { useLocation } from "react-router-dom"

function Register () {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registerEnabled, setRegisterEnabled] = useState(true)
  const [validated, setValidated] = useState(false)
  const query = new URLSearchParams(useLocation().search)

  useEffect(() => {
    const emailFromLogin = query.get('email')
    if(emailFromLogin) {
      setEmail(emailFromLogin)
    }
  }, [])

  function handleRegister () {
    setRegisterEnabled(false)
    try {
      setValidated(false)
      setValidated(true)
      setRegisterEnabled(true)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <RegisterContainer>
      <Logo>
        <RegisterLogoTitle>MemorInn</RegisterLogoTitle>
      </Logo>
      <Input placeholder="nome completo" value={name} type="text" changeSearch={setName} />
      <RegisterWarning>{!name.trim() && validated ? "Nome completo obrigatório" : null}</RegisterWarning>
      <Input placeholder="nome de usuário" value={userName} type="text" changeSearch={setUserName} />
      <RegisterWarning>{!userName.trim() && validated ? "Nome de usuário obrigatório" : null}</RegisterWarning>
      <Input placeholder="e-mail" value={email} type="email" changeSearch={setEmail} />
      <RegisterWarning>{!email.trim() && validated ? "E-mail obrigatório" : null}</RegisterWarning>
      <Input placeholder="senha" value={password} type="password" changeSearch={setPassword} />
      <RegisterWarning>{!password.trim() && validated ? "Senha obrigatória" : null}</RegisterWarning>
      <RegisterButton onClick={handleRegister} disabled={!registerEnabled}>Cadastrar</RegisterButton>
    </RegisterContainer>
  )
}

export default Register
