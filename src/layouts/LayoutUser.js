import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const LayoutUser = ({ routes }) => {
  return (
    <Layout>
      <h1>menu</h1>
      <Layout>
        <Header>Header</Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Footer</Footer>
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

export default LayoutUser;
