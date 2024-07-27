import { useState } from "react"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { LoginButton, LoginContainer, LoginLogoTitle, LoginWarning } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../state/auth/authSlice"

function Login () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginEnabled, setLoginEnabled] = useState(true)
  const [validated, setValidated] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  async function handleLogin () {
    setLoggedIn(false)
    setLoginEnabled(false)
    try {
      setValidated(false)
      login({email, password})
      navigate('/')
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
      <LoginWarning>{loggedIn && validated ? "Erro ao fazer login. Verifique suas credenciais e tente novamente" : null}</LoginWarning>
      <Link to={`/register${email.trim() ? `?email=${email}` : ''}`}>
        <LoginWarning>Novo por aqui? Faça seu cadastro</LoginWarning>
      </Link>
    </LoginContainer>
  )
}

export default Login
