import { useContext } from "react"
import { AuthContext } from "../Pages/context/AuthProvider/AuthProvider"

const useAuth = () => {
    return useContext(AuthContext)

}

export default useAuth;