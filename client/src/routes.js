import { HOME_ROUTE, LOGIN_ROUTE, MY_POSTS_ROUTE, POST_CREATE_ROUTE, POST_EDIT_ROUTE, POST_VIEW_ROUTE, REGISTRATION_ROUTE } from "./utils/const"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreatePostPage from "./pages/CreatePost"
import View from "./pages/View"
import MyPosts from "./pages/MyPosts"
import EditPostPage from "./pages/EditPost"

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: <Home /> 
    },
    {
        path: POST_VIEW_ROUTE,
        component: <View />
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
        path: MY_POSTS_ROUTE,
        component: <MyPosts /> 
    },
    {
        path: POST_EDIT_ROUTE,
        component: <EditPostPage /> 
    },
    {
        path: POST_VIEW_ROUTE,
        component: <View />
    },
    {
        path: POST_CREATE_ROUTE,
        component: <CreatePostPage /> 
    }
]