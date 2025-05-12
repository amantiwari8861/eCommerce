import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseOverview from "./components/courses/CourseOverview";
import LearnUseEffect from "./components/LearnUseEffect";
import LearnFxn from "./components/LearnFxn";
import Wrapper from "./context/Wrapper";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/coursedetail/:courseId",
                element: <CourseOverview />
            },
            {
                path: "/resources",
                element: <Resources />
            },
            {
                path: "/events",
                element: <Events />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/useeffect",
                element: <LearnUseEffect />
            },
            {
                path: "/learnfxn",
                element: <LearnFxn />
            },
            {
                path: "/wrapper",
                element: <Wrapper />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);
const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;