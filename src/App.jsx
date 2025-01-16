
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './Components/Home'
import About from './Components/About'
import ErrorPage from './Components/ErrorPage'
import { Countries } from './Components/Country'
import { Contact } from './Components/Contact'
import { AppLayout } from './Layouts/AppLayout'
import { CountryDetails } from './Components/CountryDetails'



function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/country',
          element:<Countries/>
        },
        {
          path:'/country/:id',                     //Dynamic Route-  :id , 
          element:<CountryDetails/>                 
        },
        {
          path:'/contact',
          element:<Contact/>
        }
      ]
    }
  ])
  

  return (
    <>
    <RouterProvider router={router}/>
       
    </>
  )
}

export default App
