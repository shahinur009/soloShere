import { createBrowserRouter, } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authintaction/Login";
import Register from "../Pages/Authintaction/Register";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import ErrorPage from "../components/ErrorPage";
import MyPostedJobs from "../Pages/MyPostedJobs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />, 
        children: [
            {
                index: true,
                element: <Home />,

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Register />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
            },
            {
                path: '/add-job',
                element: <AddJob />
            },
            {
                path:'/my-posted-jobs',
                element: <MyPostedJobs/>
            }
        ]
    }
])

export default router;