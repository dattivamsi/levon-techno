import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import store from './store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './components/routes/Overview';
import Analytics from './components/routes/Analytics';
import Settings from './components/routes/Settings';
import './App.css';
// import 'antd/dist/reset.css';

const { Sider, Content } = Layout;

const App = () => {
  return (
    <Provider store={store}>
      
      <Router>
        <Layout className="app" style={{
        minHeight: '100vh',
      }}>
          {/* <Header style={{
            padding: 0,
          }} /> */}
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Sidebar />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
