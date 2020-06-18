import React ,{ useState} from "react";
import { Route, Switch,Redirect} from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/admin/menuTop";
import MenuSider from "../components/admin/menuSider";
import SignIn from "../pages/admin/SignIn";
import "./LayoutAdmin.scss";
const { Header, Content, Footer } = Layout;




const LayoutAdmin = (props) => {
  const { routes } = props;
  const [menuCollapsed,setMenuCollapsed] = useState(false);
  

const user = null;

if(!user){
  return (
  <>
  
    <Route path="/admin/login" component= {SignIn} />
    <Redirect to="/admin/login" />
</>
);
  }


  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed}/>
      <Layout className="layout-admin" style={{marginLeft : menuCollapsed ? "80px" : "200px"}}>
  <Header className="layout-admin__header"><MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}  /></Header>
      <Content className="layout-admin__content">
        <LoadRoutes routes={routes} />
      </Content>
      <Footer className="layout-admin__footer">Web Trial Copyright</Footer>
      </Layout>
    </Layout>
  );
};

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
export default LayoutAdmin;
