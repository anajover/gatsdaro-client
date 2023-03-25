import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

    const { isLoggedIn, user, authenticateUser } = useContext(AuthContext)

    const toggleStyles = (navInfo) => {
        return navInfo.isActive === true ? activeStyles : inActiveStyles;
    };

    const activeStyles = {
        textDecoration: "underline",
    };

    const inActiveStyles = {
        textDecoration: "none",
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken")
        authenticateUser()
    }

    return (
        <div>

            {user !== null && <p>Bienvenido: {user.username}</p> }

            {isLoggedIn === true ? (
                <nav>
                    <NavLink to="/" style={toggleStyles}> Home </NavLink>
                    <NavLink to="/adoptions" end={true} style={toggleStyles}> Ver Lista </NavLink>
                    <NavLink to="/admin" style={toggleStyles}> Administrador </NavLink>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </nav>
            ) : (
                <nav>
                    <NavLink to="/" style={toggleStyles}> Home </NavLink>
                    <NavLink to="/adoptions" end={true} style={toggleStyles}> Ver Lista </NavLink>
                    {/* <NavLink to="/admin" style={toggleStyles}> Administrador </NavLink> */}
                    <NavLink>Hola</NavLink>
                </nav>
            )}

        </div>
    )
}

export default Navbar;