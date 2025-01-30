import { createBrowserRouter } from "react-router"
import Home from "./components/Home/Home"
import Main from "./components/Main/Main"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { RouterProvider } from "react-router/dom"


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }
  ])

  return (
    <div className="font-poppins">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
