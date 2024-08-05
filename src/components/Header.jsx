import React from 'react';
import { Layout, Menu } from 'antd';


const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Main Dashboard</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
