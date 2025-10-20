import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "./consts"

export const privateRoutes = []

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    }
]