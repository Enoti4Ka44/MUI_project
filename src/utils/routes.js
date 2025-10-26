import Auth from "../pages/auth/Auth"
import Home from "../pages/home/Home"
import NotFound from "../pages/notFound/NotFound"
import { HOME_ROUTE, LOGIN_ROUTE, NOTFOUND_ROUTE, REGISTRATION_ROUTE } from "./consts"

export const privateRoutes = []

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: NOTFOUND_ROUTE,
        Component: NotFound
    }
]
