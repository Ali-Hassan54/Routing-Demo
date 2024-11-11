import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import StudentDetail from './components/Student-detail';
import User from './components/User';
import Group from './components/Group';
import NotFound from './components/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div>
    <Navbar/>
    <Home />
    </div>
  },
  {
    path: "/about",
    element:
    <div>
    <Navbar/>
    <About />
    </div> 
  },
  {
    path: "/dashboard",
    element:
    <div>
    <Navbar/>
    <Dashboard />
    </div>,
    children:[
     { 
      path: "user",
      element:<User/>
    },
    { 
      path: "group",
      element:<Group/>
    }
    ]  
  },
  {
    path: "/student-detail/:id",
    element:
    <div>
    <Navbar/>
    <StudentDetail />
    </div>  
  },
  {
    path: "*",
    element:<NotFound/>
  },
]);
function App() {
  return (
    <>
    <RouterProvider
    router={router}/>
    </>
  )
}

export default App
