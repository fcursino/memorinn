import { useEffect } from "react";
import { NavbarContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import memorinnAPI from "../../services/memorinnAPI";
import Cookies from "js-cookie";
import { login } from "../../state/auth/authSlice";
import { RootState } from "../../state/store";

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.value);

    useEffect(() => {
        const checkAndLogin = async () => {
            if (!user.token) {
                const token = Cookies.get("token");
                if (token) {
                    try {
                        const response = await memorinnAPI.post(`/users/login/${token}`);
                        if (response.data) {
                            const loggedUser = response.data.user;
                            dispatch(login({
                                token: response.data.token,
                                email: loggedUser.email,
                                id: loggedUser.id,
                                userName: loggedUser.userName,
                                name: loggedUser.name
                            }));
                        }
                    } catch (error) {
                        console.error("Login failed:", error);
                    }
                }
            }
        };
        checkAndLogin();
    }, []);

    return (
        <NavbarContainer />
    );
}

export default Navbar;
