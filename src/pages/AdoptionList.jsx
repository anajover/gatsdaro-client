// import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddForm from "../components/AddForm";
import { getAllAdoptionsService } from "../services/adoption.services";

function AdoptionList() {

    const [allAdoptions, setAllAdoptions] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        getAllAdoptions()
    }, [])

    const getAllAdoptions = async () => {

        try {

            const response = await getAllAdoptionsService()

            setAllAdoptions(response.data)

        }catch(error) {
            if (error.response.status === 401) {
                navigate("/admin")
            } else {
                navigate("/error")
            }
        }
    }

    return (
        <div>
            <AddForm getAllAdoptions={getAllAdoptions}/>
            <hr/>
            <h3>Lista de todos los gatitos para adoptar</h3>

            {allAdoptions === null && <h3>... Loading</h3>}

            {allAdoptions !== null && allAdoptions.map((eachAdoption) => {
                return (
                    <div id="catslist-images" key={eachAdoption._id}>
                    <Link to={`/adoptions/${eachAdoption._id}/details`}><img src={eachAdoption.image} /></Link>
                    </div>
                )
            })
        }
        </div>
    )
};

export default AdoptionList;