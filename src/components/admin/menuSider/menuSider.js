import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
//icons
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import "./menuSider.scss";
const { Sider } = Layout;

function MenuSider(props) {
 const  {menuCollapsed} = props;


  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu theme="dark" mode="inline" defaultOpenKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/admin">
            <HomeOutlined />
            <span className="nav-text"> Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/admin/menu">
            <MenuOutlined />
            <span className="nav-text"> Menu</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default MenuSider;
