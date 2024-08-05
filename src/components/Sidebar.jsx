import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AppstoreOutlined, PieChartOutlined, SettingOutlined } from '@ant-design/icons';
// import './Sidebar.css';

const Sidebar = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        <Link to="/">Overview</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<PieChartOutlined />}>
        <Link to="/analytics">Analytics</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
