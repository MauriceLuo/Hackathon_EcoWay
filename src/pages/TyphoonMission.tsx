import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Progress, Alert, List, Tag } from 'antd';
import { ThunderboltOutlined, WarningOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const MissionContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
  min-height: 100vh;
`;

const StormEffect = styled.div<{ active: boolean }>`
  height: 200px;
  background: ${props =>
    props.active
      ? 'linear-gradient(180deg, #001529 0%, #096dd9 100%)'
      : 'linear-gradient(180deg, #1890ff 0%, #096dd9 100%)'};
  border-radius: 8px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  animation: ${props => (props.active ? 'storm 2s infinite' : 'none')};

  @keyframes storm {
    0% { filter: brightness(1); }
    50% { filter: brightness(0.7); }
    100% { filter: brightness(1); }
  }
`;

interface Device {
  id: string;
  name: string;
  status: 'on' | 'off';
  power: number;
}

const TyphoonMission: React.FC = () => {
  const [missionActive, setMissionActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [devices, setDevices] = useState<Device[]>([
    { id: '1', name: 'Living Room AC', status: 'on', power: 1500 },
    { id: '2', name: 'Bedroom AC', status: 'on', power: 1200 },
    { id: '3', name: 'Water Heater', status: 'on', power: 2000 },
    { id: '4', name: 'Television', status: 'on', power: 200 },
    { id: '5', name: 'Washing Machine', status: 'off', power: 500 }
  ]);

  const [totalSaved, setTotalSaved] = useState(0);

  useEffect(() => {
    if (missionActive) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [missionActive]);

  const handleDeviceToggle = (deviceId: string) => {
    setDevices(prev =>
      prev.map(device =>
        device.id === deviceId
          ? {
              ...device,
              status: device.status === 'on' ? 'off' : 'on'
            }
          : device
      )
    );

    const device = devices.find(d => d.id === deviceId);
    if (device && device.status === 'on') {
      setTotalSaved(prev => prev + device.power);
    }
  };

  const calculateEfficiency = () => {
    const totalDevices = devices.length;
    const offDevices = devices.filter(d => d.status === 'off').length;
    return Math.round((offDevices / totalDevices) * 100);
  };

  return (
    <MissionContainer>
      <StormEffect active={missionActive}>
        <Row align="middle" style={{ height: '100%', padding: '0 24px' }}>
          <Col span={16}>
            <h1 style={{ color: 'white', margin: 0 }}>
              Signal No. 8 Special Mission
              {missionActive && <WarningOutlined style={{ marginLeft: 8 }} />}
            </h1>
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <Button
              type={missionActive ? 'default' : 'primary'}
              onClick={() => setMissionActive(!missionActive)}
            >
              {missionActive ? 'End Mission' : 'Start Mission'}
            </Button>
          </Col>
        </Row>
      </StormEffect>

      {missionActive && (
        <Alert
          message="Typhoon Warning"
          description="A territory-wide energy saving operation is underway. Please turn off non-essential electrical appliances to jointly protect Hong Kong's power grid!"
          type="warning"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )}

      <Row gutter={16}>
        <Col span={16}>
          <Card title="Device Status">
            <List
              dataSource={devices}
              renderItem={device => (
                <List.Item
                  actions={[
                    <Button
                      type={device.status === 'on' ? 'primary' : 'default'}
                      onClick={() => handleDeviceToggle(device.id)}
                    >
                      {device.status === 'on' ? 'Turn Off' : 'Turn On'}
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={device.name}
                    description={`Power: ${device.power}W`}
                  />
                  <Tag color={device.status === 'on' ? 'green' : 'red'}>
                    {device.status === 'on' ? 'Running' : 'Off'}
                  </Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Mission Progress">
            <Progress type="circle" percent={progress} />
            <div style={{ marginTop: 16 }}>
              <p>Device Off Rate: {calculateEfficiency()}%</p>
              <p>
                Energy Saved: 
                <ThunderboltOutlined style={{ color: '#faad14' }} />
                {(totalSaved / 1000).toFixed(1)} kWh
              </p>
            </div>
          </Card>

          {progress === 100 && (
            <Card title="Mission Rewards" style={{ marginTop: 16 }}>
              <p>🏆 Obtained "Typhoon Warrior" Medal</p>
              <p>💰 Energy Saving Reward: 100 Eco Points</p>
              <p>🌟 Unlocked "Windproof Glass" Decoration</p>
              <Button type="primary" block>
                Claim Rewards
              </Button>
            </Card>
          )}
        </Col>
      </Row>
    </MissionContainer>
  );
};

export default TyphoonMission; 