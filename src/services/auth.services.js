import service from "./config.services";

const signupService = (user) => {
    return service.post("/auth/signup", user)
}

const adminService = (user) => {
    return service.post("/auth/admin", user)
}

const verifyService = () => {
    return service.get("/auth/verify")
}

export {
    signupService,
    adminService,
    verifyService
}