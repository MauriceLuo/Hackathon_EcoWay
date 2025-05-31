import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  BuildOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import styled from 'styled-components';

import Home from './pages/Home';
import VirtualHome from './pages/VirtualHome';
import TyphoonMission from './pages/TyphoonMission';

const { Header, Content, Sider } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;

const App: React.FC = () => {
  return (
    <Router>
      <StyledLayout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <Logo>EcoWay</Logo>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">Energy Monitoring</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BuildOutlined />}>
              <Link to="/virtual-home">Virtual Home</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ThunderboltOutlined />}>
              <Link to="/typhoon-mission">Typhoon Mission</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: '#fff' }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/virtual-home" element={<VirtualHome />} />
              <Route path="/typhoon-mission" element={<TyphoonMission />} />
            </Routes>
          </Content>
        </Layout>
      </StyledLayout>
    </Router>
  );
};

export default App; 