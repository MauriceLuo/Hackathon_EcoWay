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
    { id: '1', name: '客厅空调', status: 'on', power: 1500 },
    { id: '2', name: '卧室空调', status: 'on', power: 1200 },
    { id: '3', name: '热水器', status: 'on', power: 2000 },
    { id: '4', name: '电视机', status: 'on', power: 200 },
    { id: '5', name: '洗衣机', status: 'off', power: 500 }
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
              8号风球特别任务
              {missionActive && <WarningOutlined style={{ marginLeft: 8 }} />}
            </h1>
          </Col>
          <Col span={8} style={{ textAlign: 'right' }}>
            <Button
              type={missionActive ? 'default' : 'primary'}
              onClick={() => setMissionActive(!missionActive)}
            >
              {missionActive ? '结束任务' : '开始任务'}
            </Button>
          </Col>
        </Row>
      </StormEffect>

      {missionActive && (
        <Alert
          message="台风警报"
          description="目前正在进行全港节能行动，请关闭非必要用电设备，共同守护香港电网！"
          type="warning"
          showIcon
          style={{ marginBottom: 24 }}
        />
      )}

      <Row gutter={16}>
        <Col span={16}>
          <Card title="设备状态">
            <List
              dataSource={devices}
              renderItem={device => (
                <List.Item
                  actions={[
                    <Button
                      type={device.status === 'on' ? 'primary' : 'default'}
                      onClick={() => handleDeviceToggle(device.id)}
                    >
                      {device.status === 'on' ? '关闭' : '开启'}
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    title={device.name}
                    description={`功率: ${device.power}W`}
                  />
                  <Tag color={device.status === 'on' ? 'green' : 'red'}>
                    {device.status === 'on' ? '运行中' : '已关闭'}
                  </Tag>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card title="任务进度">
            <Progress type="circle" percent={progress} />
            <div style={{ marginTop: 16 }}>
              <p>设备关闭率：{calculateEfficiency()}%</p>
              <p>
                已节省能源：
                <ThunderboltOutlined style={{ color: '#faad14' }} />
                {(totalSaved / 1000).toFixed(1)}度
              </p>
            </div>
          </Card>

          {progress === 100 && (
            <Card title="任务奖励" style={{ marginTop: 16 }}>
              <p>🏆 获得"抗风勇士"勋章</p>
              <p>💰 节能奖励：100碳积分</p>
              <p>🌟 解锁"防风玻璃"装饰</p>
              <Button type="primary" block>
                领取奖励
              </Button>
            </Card>
          )}
        </Col>
      </Row>
    </MissionContainer>
  );
};

export default TyphoonMission; 