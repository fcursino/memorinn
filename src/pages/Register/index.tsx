import { useEffect, useState } from "react"
import Input from "../../components/Input"
import Logo from "../../components/Logo"
import { RegisterButton, RegisterContainer, RegisterLogoTitle, RegisterWarning } from "./style"
import { useLocation, useNavigate } from "react-router-dom"
import memorinnAPI from "../../services/memorinnAPI"

function Register () {
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registerEnabled, setRegisterEnabled] = useState(true)
  const [validated, setValidated] = useState(false)
  const [registered, setRegistered] = useState(false)
  const query = new URLSearchParams(useLocation().search)
  const navigate = useNavigate()

  useEffect(() => {
    const emailFromLogin = query.get('email')
    if(emailFromLogin) {
      setEmail(emailFromLogin)
    }
  }, [])

  async function handleRegister () {
    setRegistered(false)
    setRegisterEnabled(false)
    try {
      setValidated(false)
      setValidated(true)
      if(name && userName && email && password) {
        const response = await registerNewUser()
        if(response.data) {
          navigate('/')
          return false
        } 
        setRegistered(true)
      }
      setRegisterEnabled(true)
    } catch (error) {
      console.log(error)
    }
  }

  async function registerNewUser(): Promise<any> {
    return await memorinnAPI.post('/users', {
      email: email,
      password: password,
      name: name,
      userName: userName
    })
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
      <RegisterWarning>{registered && validated ? "Erro ao fazer cadastro. Verifique suas credenciais e tente novamente" : null}</RegisterWarning>
    </RegisterContainer>
  )
}

export default Register
