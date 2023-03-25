import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/auth.services";

function Signup() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("null");

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignup = async (e) => {

        e.preventDefault();

        const user = {
            username,
            email,
            password
        }

        try {

            await signupService(user)
            console.log("todo bien")
            navigate("/admin")
        }catch(error) {
            console.log(error)
            if (error.response.status === 400) {
                setErrorMessage(error.response.data.errorMessage)
            } else {
                navigate("/error")
            }
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>

            <form onSubmit={handleSignup}>
                <label>Usuario:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                />

                <label>Contraseña:</label>
                <input
                    type="password"
                    name="passwprd"
                    value={password}
                    onChange={handlePasswordChange}
                />

                { errorMessage !== null && <p>{errorMessage}</p>}

                <button type="submit">Signup</button>
            </form>
        </div>
    )
};

export default Signup;