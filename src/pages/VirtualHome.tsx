import React, { useState } from 'react';
import { Card, Row, Col, Button, Progress, Select, message } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const HomeContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
  min-height: 100vh;
`;

const VirtualBuilding = styled.div<{ pollution: number }>`
  height: 400px;
  background: linear-gradient(
    180deg,
    ${props => `rgba(0,0,0,${props.pollution})`} 0%,
    #1890ff 100%
  );
  border-radius: 8px;
  position: relative;
  margin-bottom: 24px;
  transition: all 0.3s ease;
`;

const BuildingElement = styled.div`
  position: absolute;
  cursor: pointer;
  padding: 8px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  &:hover {
    transform: scale(1.05);
  }
`;

interface BuildingProps {
  level: number;
  energyEfficiency: number;
  decorations: string[];
}

const VirtualHome: React.FC = () => {
  const [building, setBuilding] = useState<BuildingProps>({
    level: 1,
    energyEfficiency: 70,
    decorations: ['Basic AC', 'Energy-saving Lamp']
  });

  const [pollution, setPollution] = useState(0.2);

  const handleUpgrade = () => {
    if (building.level < 5) {
      setBuilding(prev => ({
        ...prev,
        level: prev.level + 1,
        energyEfficiency: Math.min(prev.energyEfficiency + 10, 100)
      }));
      message.success('Building upgraded successfully!');
    }
  };

  const handleAddDecoration = (decoration: string) => {
    setBuilding(prev => ({
      ...prev,
      decorations: [...prev.decorations, decoration]
    }));
    setPollution(prev => Math.max(prev - 0.05, 0));
    message.success('Decoration installed successfully!');
  };

  return (
    <HomeContainer>
      <Card title="My Virtual Home">
        <VirtualBuilding pollution={pollution}>
          {building.decorations.map((item, index) => (
            <BuildingElement
              key={index}
              style={{
                top: `${50 + index * 20}px`,
                left: `${30 + index * 40}px`
              }}
            >
              {item}
            </BuildingElement>
          ))}
        </VirtualBuilding>

        <Row gutter={16}>
          <Col span={8}>
            <Card type="inner" title="Building Level">
              <Progress type="circle" percent={building.level * 20} />
              <Button
                type="primary"
                block
                style={{ marginTop: 16 }}
                onClick={handleUpgrade}
                disabled={building.level >= 5}
              >
                Upgrade Building
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card type="inner" title="Energy Efficiency">
              <Progress
                type="circle"
                percent={building.energyEfficiency}
                strokeColor={{
                  '0%': '#ff4d4f',
                  '100%': '#52c41a'
                }}
              />
            </Card>
          </Col>

          <Col span={8}>
            <Card type="inner" title="Add Energy-saving Decoration">
              <Select
                style={{ width: '100%' }}
                placeholder="Select Decoration"
                onChange={handleAddDecoration}
              >
                <Option value="Rain Collector">Rain Collector</Option>
                <Option value="Solar Panel">Solar Panel</Option>
                <Option value="Smart Curtain">Smart Curtain</Option>
                <Option value="Green Wall">Green Wall</Option>
              </Select>
            </Card>
          </Col>
        </Row>

        <Card style={{ marginTop: 24 }} title="Building Achievements">
          <Row gutter={16}>
            <Col span={8}>
              <Card type="inner" title="Water Saving Expert">
                <Progress type="circle" percent={75} width={80} />
                <p>Total water saved: 230L</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card type="inner" title="Electricity Optimizer">
                <Progress type="circle" percent={60} width={80} />
                <p>Electricity saved: 45 kWh</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card type="inner" title="Eco Pioneer">
                <Progress type="circle" percent={90} width={80} />
                <p>Carbon emission reduced: 120kg</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </Card>
    </HomeContainer>
  );
};

export default VirtualHome; 