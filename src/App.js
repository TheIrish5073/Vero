import "./main.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/home-page.jsx";
import {About} from "./pages/about-page.jsx";
import {Menu} from "./pages/menu-page.jsx";
import {People} from "./pages/people-page.jsx";
import {Private} from "./pages/private-page.jsx";
import {Stories} from "./pages/stories-page.jsx";
import { Error } from "./components/error-component.jsx";

const router=createBrowserRouter([{
  path:"/",
  element:<Home/>,
  errorElement:<Error/>
},{
  path:"/about",
  element:<About/>
},{
  path:"/menu",
  element:<Menu/>
},{
  path:"/people",
  element:<People/>
},{
  path:"/private",
  element:<Private/>
},{
  path:"/stories",
  element:<Stories/>,
}])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
//
export default App;
