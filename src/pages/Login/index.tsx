import { useState } from "react"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { LoginButton, LoginContainer, LoginLogoTitle, LoginWarning } from "./style"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../../state/auth/authSlice"
import memorinnAPI from "../../services/memorinnAPI"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../state/store"

function Login () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginEnabled, setLoginEnabled] = useState(true)
  const [validated, setValidated] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  async function handleLogin () {
    setLoggedIn(false)
    setLoginEnabled(false)
    try {
      setValidated(false)
      const response = await memorinnAPI.post(`users/login`, {
        email, password
      })
      if(response.data) {
        const loggedUser = response.data.user
        dispatch(login({
          token: response.data.token,
          email: loggedUser.email,
          id: loggedUser.id,
          userName: loggedUser.userName,
          name: loggedUser.name
        }))
        navigate('/')
      }
      
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
