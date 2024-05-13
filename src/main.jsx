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
import Update from './Page/Update';
import Category from './Page/Category';
import ViewDetels from './Components/ViewDetels/ViewDetels';

// import PrivetRoute from './PrivetRoute/PrivetRoute';
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
      { path:'/allbook/:id',
      element: <ViewDetels></ViewDetels>,
      // loader: ({params}) => fetch(`http://localhost:5000/allbook/6641051731b76dbcbb89dbe8`) 
      loader: ({params}) => fetch(`http://localhost:5000/allbook/${params.id}`) 
      

      },
     
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/category/:category',
        element:<Category></Category>,
        loader: ({params}) => fetch(`http://localhost:5000/category/${params.category}`) 
        
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/update/:id',
        element: <Update></Update>
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
