import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteAdoptionService, getAdoptionDetailsService } from "../services/adoption.services";
import { AuthContext } from "../context/auth.context";


function AdoptionDetails() {

    const { isLoggedIn } = useContext(AuthContext)

    const {id} = useParams();
    const navigate = useNavigate()

    const [adoptionDetails, setAdoptionDetails] = useState(null)

    useEffect(() => {
        getAdoptionDetails()
    }, [])

    const getAdoptionDetails = async() => {

        try {

            const response = await getAdoptionDetailsService(id)
            setAdoptionDetails(response.data)

        }catch(error){
            navigate("/error")
        }
    }

    const handleDelete = async () => {

        try {

            await deleteAdoptionService(id)
            navigate("/adoptions")

        }catch(error) {
            navigate("/error")
        }
    }

    if (adoptionDetails === null) {
        return <h3>... Loading</h3>
    }

    return (
        <div>
            <h3>Detalles de los gatitos</h3>

            {isLoggedIn === false ? (
                <div>

                <img src={adoptionDetails.image} />
                <p>Edad: {adoptionDetails.age}</p>
                <p>Sexo: {adoptionDetails.gender}</p>
                <p>Esterilizado? {adoptionDetails.sterilized === true ? "Sí" : "No"}</p>
                <p>Características: {adoptionDetails.details}</p>
                
                </div>

            ) : (

                <div>

                <Link to={`/adoptions/${id}/edit`}><button>Editar</button></Link>
                <button onClick={handleDelete}>Borrar</button>

                </div>
            )}

        </div>
    )
}

export default AdoptionDetails;