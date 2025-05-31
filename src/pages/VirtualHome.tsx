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
    decorations: ['基础空调', '节能灯']
  });

  const [pollution, setPollution] = useState(0.2);

  const handleUpgrade = () => {
    if (building.level < 5) {
      setBuilding(prev => ({
        ...prev,
        level: prev.level + 1,
        energyEfficiency: Math.min(prev.energyEfficiency + 10, 100)
      }));
      message.success('建筑升级成功！');
    }
  };

  const handleAddDecoration = (decoration: string) => {
    setBuilding(prev => ({
      ...prev,
      decorations: [...prev.decorations, decoration]
    }));
    setPollution(prev => Math.max(prev - 0.05, 0));
    message.success('装饰安装成功！');
  };

  return (
    <HomeContainer>
      <Card title="我的虚拟家园">
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
            <Card type="inner" title="建筑等级">
              <Progress type="circle" percent={building.level * 20} />
              <Button
                type="primary"
                block
                style={{ marginTop: 16 }}
                onClick={handleUpgrade}
                disabled={building.level >= 5}
              >
                升级建筑
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card type="inner" title="能源效率">
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
            <Card type="inner" title="添加节能装饰">
              <Select
                style={{ width: '100%' }}
                placeholder="选择装饰"
                onChange={handleAddDecoration}
              >
                <Option value="雨水收集器">雨水收集器</Option>
                <Option value="太阳能板">太阳能板</Option>
                <Option value="智能窗帘">智能窗帘</Option>
                <Option value="绿植墙">绿植墙</Option>
              </Select>
            </Card>
          </Col>
        </Row>

        <Card style={{ marginTop: 24 }} title="建筑成就">
          <Row gutter={16}>
            <Col span={8}>
              <Card type="inner" title="节水达人">
                <Progress type="circle" percent={75} width={80} />
                <p>累计节水：230升</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card type="inner" title="电力优化师">
                <Progress type="circle" percent={60} width={80} />
                <p>节省电量：45度</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card type="inner" title="环保先锋">
                <Progress type="circle" percent={90} width={80} />
                <p>减少碳排放：120kg</p>
              </Card>
            </Col>
          </Row>
        </Card>
      </Card>
    </HomeContainer>
  );
};

export default VirtualHome; 