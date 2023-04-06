import { HOME_ROUTE, LOGIN_ROUTE, POST_CREATE, REGISTRATION_ROUTE } from "./utils/const"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreatePostPage from "./pages/CreatePost"

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: <Home /> 
    },
    {
        path: LOGIN_ROUTE,
        component: <SignIn />
    },
    {
        path: REGISTRATION_ROUTE,
        component: <SignUp />
    }
]

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        component: <Home /> 
    },
    {
        path: POST_CREATE,
        component: <CreatePostPage /> 
    }
]