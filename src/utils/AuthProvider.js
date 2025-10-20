import { createContext, useContext } from "react"

const AuthContext = createContext()

const AuthPovider = ({children}) => {
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}
export default AuthPovider

export const useAuth = () => {
    return useContext(AuthContext)
}