import { useEffect, useState } from "react";
import { AccountContainer, AccountLoginButton } from "./style";
import { store } from "../../state/store";

interface AccountProps {}

const Account: React.FC<AccountProps> = () => {
  const [isLoginPage, setIsLoginPage] = useState(true)
  const { auth } = store.getState()
  const user = auth.value
  useEffect(() => {
    if(!window.location.pathname.includes('login')) setIsLoginPage(false)
  }, [user])

  function redirectToLogin () {
    window.location.pathname = '/login'
  }
    return (
      <>
        {!isLoginPage ? user.token ?
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