import { useState } from "react"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { LoginButton, LoginContainer, LoginLogoTitle, LoginWarning } from "./style"
import { useAuth } from '../../hooks/AuthContext'

function Login () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginEnabled, setLoginEnabled] = useState(true)
  const [validated, setValidated] = useState(false)
  const { login } = useAuth()

  function handleLogin () {
    setLoginEnabled(false)
    try {
      setValidated(false)
      login({email, password})
      setValidated(true)
      setLoginEnabled(true)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <LoginContainer>
      <Logo>
        <LoginLogoTitle>MemorInn</LoginLogoTitle>
      </Logo>
      <Input placeholder="e-mail" value={email} type="email" changeSearch={setEmail} />
      <LoginWarning>{!email.trim() && validated ? "E-mail obrigatório" : null}</LoginWarning>
      <Input placeholder="senha" value={password} type="password" changeSearch={setPassword} />
      <LoginWarning>{!password.trim() && validated ? "Senha obrigatória" : null}</LoginWarning>
      <LoginButton onClick={handleLogin} disabled={!loginEnabled}>Login</LoginButton>
    </LoginContainer>
  )
}

export default Login
