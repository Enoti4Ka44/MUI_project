import Auth from "../pages/auth/Auth"
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./consts"

export const privateRoutes = []

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]
