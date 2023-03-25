import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editAdoptionService, getAdoptionDetailsService } from "../services/adoption.services";

function AdoptionEdit() {

    const navigate = useNavigate()
    const {id} = useParams()

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [sterilized, setSterilized] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState("");

    const handleAgeChange = (e) => setAge(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleSterilizedChange = (e) => setSterilized(e.target.checked);
    const handleDetailsChange = (e) => setDetails(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const theAdoption = {
                age,
                gender,
                sterilized,
                details,
                image
            }

            await editAdoptionService(id, theAdoption)
            navigate(`/adoptions/${id}/details`)

        }catch(error) {
            navigate("/error")
        }
    };

    useEffect(() => {
        getAdoptionDetails()
    }, [])

    const getAdoptionDetails = async () => {

        try {

            const response = await getAdoptionDetailsService(id)
            const {age, gender, sterilized, details, image} = response.data
            
            setAge(age)
            setGender(gender)
            setSterilized(sterilized)
            setDetails(details)
            setImage(image)

        }catch(error) {
            navigate("/error")
        }
    }

    return (
        <div>
            <h3>Editar gatitos</h3>

            <form onSubmit={handleSubmit}>
                <label htmlForm="age">Edad</label>
                <input
                    type="text"
                    name="age"
                    onChange={handleAgeChange}
                    value={age}
                />

                <label htmlForm="gender">Sexo</label>
                <input
                    type="text"
                    name="gender"
                    onChange={handleGenderChange}
                    value={gender}
                />

                <label htmlForm="sterilized">Esterilizado</label>
                <input
                    type="checknox"
                    name="sterilized"
                    onChange={handleSterilizedChange}
                    value={sterilized}
                />

                <label htmlForm="details">Características</label>
                <input
                    type="textbox"
                    name="details"
                    onChange={handleDetailsChange}
                    value={details}
                />

                <label htmlForm="image">Imagen</label>
                <input
                    type="text"
                    name="image"
                    onChange={handleImageChange}
                    value={image}
                />

                <button type="submit">Editar</button>
            </form>
        </div>
    )
};

export default AdoptionEdit;