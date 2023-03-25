import { useState, useContext } from "react";
import { adminService } from "../../services/auth.services";

import { AuthContext } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

function Admin() {

    const { authenticateUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleAdmin = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        try {
            const response = await adminService(user)
            console.log("usuario validado", response.data)

            localStorage.setItem("authToken", response.data.authToken)
            authenticateUser()

            navigate("/adoptions")

        }catch(error) {

            if (error.response.status === 400 || error.response.status === 401) {
                setErrorMessage(error.response.data.errorMessage)
            }else {
                navigate("/error")
            }
        }
    };

    return (
        <div>
            <h1>Log In</h1>

            <form onSubmit={handleAdmin}>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                {errorMessage !== null && <p>{errorMessage}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Admin;