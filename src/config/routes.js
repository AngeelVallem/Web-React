//Layouts
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutUser from "../layouts/LayoutUser";
//Admin Pages
import AdminHome from "../pages/admin";
import AdminSignIn from "../pages/admin/SignIn";
//User Pages 
import Home from "../pages/user/Home";
import Contact from "../pages/user/Contact"
//OTHERS..
import Error404 from "../pages/Error404"


const routes = [
  {
    path: "/admin",
    exact: false,
    component: LayoutAdmin,
    routes: [
      {
        path: "/admin",
        exact: true,
        component: AdminHome,
      },
      {
        path: "/admin/login",
        exact: true,
        component: AdminSignIn,
      },
      {
        component:Error404
      }
    ],
  },
  {
    path: "/",
    exact: false,
    component: LayoutUser,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/Contact",
        exact: true,
        component: Contact,
      },
       {
        component:Error404
      }
    ],
  },
];


export default routes;