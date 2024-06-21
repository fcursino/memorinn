import { useState } from "react"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { LoginButton, LoginContainer, LoginLogoTitle } from "./style"
import { useAuth } from '../../hooks/AuthContext'

function Login () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginEnabled, setLoginEnabled] = useState(true)
  const { login } = useAuth()

  function handleLogin () {
    setLoginEnabled(false)
    try {
      login({email, password})
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
      <Input placeholder="senha" value={password} type="password" changeSearch={setPassword} />
      <LoginButton onClick={handleLogin} disabled={loginEnabled}>Login</LoginButton>
    </LoginContainer>
  )
}

export default Login
