import React from "react";
import DefaultLOGO from "../../../assets/img/png/original.png";
import {
  MenuFoldOutlined,
  PoweroffOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import "./menuTop.scss";

function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to="/admin">
          <img
            className="menu-top__left-logo"
            src={DefaultLOGO}
            alt="DEFULT LOGO"
          />
        </Link>

        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={() => console.log("click2")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}

export default MenuTop;
