import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddForm(props) {
    const [age, setAge] =useState("");
    const [gender, setGender] = useState("");
    const [sterilized, setSterilized] = useState(false);
    const [details, setDetails] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate()

    const handleAgeChange = (e) => setAge(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleSterilizedChange = (e) => setSterilized(e.target.checked); // en checkboxes no usamos .value sino .checked
    const handleDetailsChange = (e) => setDetails(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()
        // ... add the adoptions here
        try {

            const newAdoption = {
                age,
                gender,
                sterilized,
                details,
                image
            }

            await axios.post("http://localhost:5005/api/adoptions", newAdoption)
            props.getAllAdoptions()

        }catch(error) {
            navigate("/error")
        }
    }

    return (
        <div>
            <h3>Agregar un gatito para adopción</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="age">Edad</label>
                <input
                    type="text"
                    name="age"
                    onChange={handleAgeChange}
                    value={age}
                />

                <label htmlFor="gender">Sexo</label>
                <input
                    type="text"
                    name="gender"
                    onChange={handleGenderChange}
                    value={gender}
                />

                <label htmlFor="sterilized">Esterilizado</label>
                <input
                    type="checkbox"
                    name="sterilized"
                    onChange={handleSterilizedChange}
                    checked={sterilized}
                />

                <label htmlFor="details">Características</label>
                <input
                    type="textbox"
                    name="details"
                    onChange={handleDetailsChange}
                    value={details}
                />

                <label htmlFor="image">Imagen</label>
                <input
                    type="text"
                    name="image"
                    onChange={handleImageChange}
                    value={image}
                />

                <button type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default AddForm;