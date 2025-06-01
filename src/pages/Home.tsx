import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Progress, Statistic } from 'antd';
import { ThunderboltOutlined, CloudOutlined, FireOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
  min-height: 100vh;
`;

const VictoriaHarbor = styled.div`
  height: 200px;
  background: linear-gradient(180deg, #1890ff 0%, #096dd9 100%);
  border-radius: 8px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: url('/harbor-silhouette.png') repeat-x;
    background-size: contain;
  }
`;

const EnergyCard = styled(Card)`
  margin-bottom: 16px;
  .ant-card-body {
    padding: 16px;
  }
`;

const ActionButton = styled(Button)`
  width: 100%;
  margin-top: 8px;
`;

interface EnergyData {
  electricity: number;
  water: number;
  gas: number;
  carbonCredits: number;
}

const Home: React.FC = () => {
  const [energyData, setEnergyData] = useState<EnergyData>({
    electricity: 12.3,
    water: 4.2,
    gas: 2.8,
    carbonCredits: 500
  });

  const [weatherEffect, setWeatherEffect] = useState<string>('normal');

  useEffect(() => {
    // 模拟实时数据更新
    const timer = setInterval(() => {
      setEnergyData(prev => ({
        ...prev,
        electricity: +(prev.electricity + (Math.random() - 0.5) * 0.1).toFixed(1)
      }));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleTurnOffStandby = () => {
    setEnergyData(prev => ({
      ...prev,
      electricity: +(prev.electricity * 0.9).toFixed(1),
      carbonCredits: prev.carbonCredits + 50
    }));
  };

  return (
    <PageContainer>
      <VictoriaHarbor>
        <h1 style={{ color: 'white', padding: '20px', margin: 0 }}>
          Victoria Harbour Energy Monitoring Station
        </h1>
      </VictoriaHarbor>

      <Row gutter={16}>
        <Col span={8}>
          <EnergyCard>
            <Statistic
              title="Today's Electricity Usage"
              value={energyData.electricity}
              precision={1}
              suffix="kWh"
              prefix={<ThunderboltOutlined style={{ color: '#faad14' }} />}
            />
            <Progress percent={75} status="active" />
            <ActionButton type="primary" onClick={handleTurnOffStandby}>
              Turn Off Standby Devices
            </ActionButton>
          </EnergyCard>
        </Col>

        <Col span={8}>
          <EnergyCard>
            <Statistic
              title="This Month's Water Usage"
              value={energyData.water}
              precision={1}
              suffix="m³"
              prefix={<CloudOutlined style={{ color: '#1890ff' }} />}
            />
            <Progress percent={60} status="active" strokeColor="#1890ff" />
          </EnergyCard>
        </Col>

        <Col span={8}>
          <EnergyCard>
            <Statistic
              title="Gas Usage"
              value={energyData.gas}
              precision={1}
              suffix="m³"
              prefix={<FireOutlined style={{ color: '#ff4d4f' }} />}
            />
            <Progress percent={45} status="active" strokeColor="#ff4d4f" />
          </EnergyCard>
        </Col>
      </Row>

      <Card title="Carbon Credit Bank" style={{ marginTop: 24 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Current Credits"
              value={energyData.carbonCredits}
              precision={0}
              suffix="Eco Points"
            />
          </Col>
          <Col span={12}>
            <Button type="primary" block>
              Redeem Rewards
            </Button>
          </Col>
        </Row>
      </Card>

      <Card title="Energy Saving Tasks" style={{ marginTop: 24 }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card type="inner" title="AC 26°C Challenge">
              <Progress type="circle" percent={30} width={80} />
              <Button type="link" block>
                Start Challenge
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card type="inner" title="Typhoon Season Energy Training">
              <Progress type="circle" percent={0} width={80} status="exception" />
              <Button type="link" block disabled>
                Not Available
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card type="inner" title="Community Energy Saving Competition">
              <Progress type="circle" percent={85} width={80} status="success" />
              <Button type="link" block>
                View Rankings
              </Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Home; 