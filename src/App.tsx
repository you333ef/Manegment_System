import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AutoLayout from './Components/Sign/AutoLayout';
import Sign from './Components/Sign/Sign';
import MasterLayOut from './Components/MasterLayOut';
import Home from './Components/Home/Home';
import ADDUsers from './Components/Users/ADDUsers';
import Add from './Components/ADD_User/Add';
import Profile from './Components/Profile/Profile';
import Error from './Components/Error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

const routes:any= createBrowserRouter([
  {
    path:'',  
  element: <AutoLayout/>,
  errorElement:<Error/>,
  children:[
    {index:true,element:<Sign/> },
    {path:'sign',element:<Sign/> },
  ]
  },
  {
    path:'dashboard',
    element:<MasterLayOut/>,
    errorElement:<Error/>,
    children:[
      {path:'home',element:<Home/>},
      {path:'users',element:<ADDUsers/>},
      {path:'add',element:<Add/>},
      {path:'profile',element:<Profile/>},

    ]

  }
 
])
  return (
    
    <React.Fragment>
      
      
<RouterProvider router={routes}>
</RouterProvider>
    </React.Fragment>
  )
}

export default App