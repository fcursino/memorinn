import { useEffect } from "react";
import { NavbarContainer } from "./style";
import { store } from "../../state/store";

const Navbar = () => {
    const { auth } = store.getState()
    useEffect(() => {
        const user = auth.value
        if(!user) {}
    }, [])
    return (
        <NavbarContainer/>
    )
}
export default Navbar