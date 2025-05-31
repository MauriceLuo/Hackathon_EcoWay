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
          维港能源监测站
        </h1>
      </VictoriaHarbor>

      <Row gutter={16}>
        <Col span={8}>
          <EnergyCard>
            <Statistic
              title="今日用电量"
              value={energyData.electricity}
              precision={1}
              suffix="度"
              prefix={<ThunderboltOutlined style={{ color: '#faad14' }} />}
            />
            <Progress percent={75} status="active" />
            <ActionButton type="primary" onClick={handleTurnOffStandby}>
              关闭待机设备
            </ActionButton>
          </EnergyCard>
        </Col>

        <Col span={8}>
          <EnergyCard>
            <Statistic
              title="本月用水量"
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
              title="煤气用量"
              value={energyData.gas}
              precision={1}
              suffix="m³"
              prefix={<FireOutlined style={{ color: '#ff4d4f' }} />}
            />
            <Progress percent={45} status="active" strokeColor="#ff4d4f" />
          </EnergyCard>
        </Col>
      </Row>

      <Card title="碳积分银行" style={{ marginTop: 24 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="当前积分"
              value={energyData.carbonCredits}
              precision={0}
              suffix="分"
            />
          </Col>
          <Col span={12}>
            <Button type="primary" block>
              兑换奖励
            </Button>
          </Col>
        </Row>
      </Card>

      <Card title="节能任务" style={{ marginTop: 24 }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card type="inner" title="空调26℃挑战">
              <Progress type="circle" percent={30} width={80} />
              <Button type="link" block>
                开始挑战
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card type="inner" title="台风季节能特训">
              <Progress type="circle" percent={0} width={80} status="exception" />
              <Button type="link" block disabled>
                未开放
              </Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card type="inner" title="社区节能竞赛">
              <Progress type="circle" percent={85} width={80} status="success" />
              <Button type="link" block>
                查看排名
              </Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </PageContainer>
  );
};

export default Home; 