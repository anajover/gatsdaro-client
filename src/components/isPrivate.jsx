import { useContext } from "react";
import { AuthContext } from "../context/auth.context.js";
import { Navigate } from "react-router-dom";

function IsPrivate(props) {

    const { isLoggedIn } = useContext(AuthContext)

    if (isLoggedIn === true) {
        return props.children
    } else {
        return <Navigate to="/admin" />
    }
}

export default IsPrivate