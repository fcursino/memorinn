import { NavbarContainer } from "./style";
import { AppDispatch, store } from "../../state/store";
import memorinnAPI from "../../services/memorinnAPI";
import Cookies from "js-cookie"
import { login } from "../../state/auth/authSlice";
import { useDispatch } from "react-redux";

const Navbar = async () => {
    const dispatch = useDispatch<AppDispatch>()
    const { auth } = store.getState()
    const user = auth.value
        if(!user) {
            const token = Cookies.get("token")
            if(token) {
                const response = await memorinnAPI.post(`/users/login/${token}`)
                if(response.data) {
                    const loggedUser = response.data.user
                    dispatch(login({
                      token: response.data.token,
                      email: loggedUser.email,
                      id: loggedUser.id,
                      userName: loggedUser.userName,
                      name: loggedUser.name
                    }))
                  }
            }
            
        }
    return (
        <NavbarContainer/>
    )
}
export default Navbar