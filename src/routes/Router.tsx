import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layaout/index';
import HomePage from '../features/Home/pages/HomePage';
import PlanPage from '../features/Plan/pages/PlanPage';
import { ThanksPage } from "../features/Thanks/pages/ThanksPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <p>Error</p>,
      children:[
        {
            index: true,
            element: <HomePage/>,
            // element: <Home />,
        },
        {
            path: "/plan",
            element: <PlanPage/>,
            // element: <Plan />,
        },
        {
            path: "/thanks",
            element: <ThanksPage />,
        },
      ]
    },
    {
        path:"*",
        element: <p>vuelve</p>
    },
]);