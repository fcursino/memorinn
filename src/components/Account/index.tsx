import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import { AccountContainer, AccountLoginButton } from "./style";

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const { user } = useAuth()
  const [isLoginPage, setIsLoginPage] = useState(true)
  useEffect(() => {
    if(!window.location.pathname.includes('login')) setIsLoginPage(false)
  }, [])

  function redirectToLogin () {
    window.location.pathname = '/login'
  }
    return (
      <>
        {!isLoginPage ? user ?
        <AccountContainer>
           {user.userName}<br/>Nome: {user.name}
        </AccountContainer> : 
        <AccountLoginButton onClick={redirectToLogin}>
          Login
        </AccountLoginButton> : null
      }
      </>
      
        
    )
}
export default Account