import service from "./config.services";

const getAllAdoptionsService = () => {
    return service.get("/adoptions")
}

const addNewAdoptionService = (theAdoption) => {
    return service.post("/adoptions", theAdoption)
}

const getAdoptionDetailsService = (id) => {
    return service.get(`/adoptions/${id}`)
}

const deleteAdoptionService = (id) => {
    return service.delete(`/adoptions/${id}`)
}

const editAdoptionService = (id, adoption) => {
    return service.patch(`/adoptions/${id}`, adoption)
}

export {
    getAllAdoptionsService,
    addNewAdoptionService,
    getAdoptionDetailsService,
    deleteAdoptionService,
    editAdoptionService
}