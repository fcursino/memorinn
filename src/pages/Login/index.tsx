import { useState } from "react"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { LoginButton, LoginContainer, LoginLogoTitle } from "./style"

function Login () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <LoginContainer>
      <Logo>
        <LoginLogoTitle>MemorInn</LoginLogoTitle>
      </Logo>
      <Input placeholder="e-mail" value={email} type="email" changeSearch={setEmail} />
      <Input placeholder="senha" value={password} type="password" changeSearch={setPassword} />
      <LoginButton>Login</LoginButton>
    </LoginContainer>
  )
}

export default Login
