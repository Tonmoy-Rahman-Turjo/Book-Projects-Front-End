import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import ErrorPage from './Page/ErrorPage';
import HomePage from './Page/HomePage';
import AddBook from './Page/AddBook';
import AllBooks from './Page/AllBooks';
import Login from './Page/Login';
import Register from './Components/Register/Register';
import BorrowedBooks from './Page/BorrowedBooks';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivetRoute from './PrivetRoute/PrivetRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/addbook",
        element: <AddBook></AddBook>,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
        // loader: ({params}) => fetch(`http://localhost:5000/allbooks/${params.id}`)
      },
      {
        path: "/borrowedbooks",
        element: <BorrowedBooks></BorrowedBooks>,
      },
     
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>   <RouterProvider router={router} /></AuthProvider>
    {/* <App /> */}
  </React.StrictMode>,
)
