import React from "react";
import "./SignIn.scss";
import {Layout,Tabs} from "antd";
import {Redirect } from "react-router-dom";
import DefaultLogo from "../../../assets/img/png/original.png"

const SignIn = () => {

const {Content} = Layout;
const {TabPane} = Tabs;
  
  
  return (
    
<Layout className="sign-in">
  <Content className="sign-in__content"> 
    <h1 className="sign-in__content-logo">
    <img src={DefaultLogo} alt= "DefaultLOGO"/>
    </h1>
    <div className="sign-in__content-tabs">
      <Tabs type="card">
         <TabPane tab ={<span> Login</span>} key="1">
           Componente entrar
         </TabPane>
         <TabPane tab={<span> Register </span>} key="2">
          Componente Register
         </TabPane>

      </Tabs>
    </div>
  </Content>
</Layout>

  );
};

export default SignIn;
