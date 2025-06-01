import React, { useState } from 'react';
import { Card, Row, Col, Button, Progress, Select, message, List, Typography } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
const { Title, Text } = Typography;

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

interface Task {
  id: string;
  name: string;
  description: string;
  experiencePoints: number;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: 'task1', name: 'Reduce Electricity Usage for a Week', description: 'E.g., turn up AC temperature, turn off lights when leaving a room.', experiencePoints: 50, completed: false },
  { id: 'task2', name: 'Collect and Use 10L of Rainwater', description: 'For watering plants or cleaning.', experiencePoints: 30, completed: false },
  { id: 'task3', name: 'Practice Waste Sorting for a Week', description: 'Correctly sort recyclables, kitchen waste, etc.', experiencePoints: 40, completed: false },
];

const VirtualHome: React.FC = () => {
  const [building, setBuilding] = useState<BuildingProps>({
    level: 1,
    energyEfficiency: 70,
    decorations: ['Basic AC', 'Energy-saving Lamp']
  });

  const [pollution, setPollution] = useState(0.2);
  const [experience, setExperience] = useState(0);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleUpgrade = () => {
    const requiredExperienceForNextLevel = building.level * 100;
    if (building.level >= 5) {
      message.info('Building has reached the maximum level.');
      return;
    }
    if (experience >= requiredExperienceForNextLevel) {
      setBuilding(prev => ({
        ...prev,
        level: prev.level + 1,
        energyEfficiency: Math.min(prev.energyEfficiency + 10, 100)
      }));
      message.success('Building upgraded successfully!');
    } else {
      message.warning(`Insufficient experience! ${requiredExperienceForNextLevel} XP needed to upgrade to Level ${building.level + 1}. Current XP: ${experience}.`);
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

  const handleCompleteTask = (taskId: string) => {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1 && !tasks[taskIndex].completed) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].completed = true;
      setTasks(updatedTasks);
      const pointsEarned = updatedTasks[taskIndex].experiencePoints;
      setExperience(prev => prev + pointsEarned);
      message.success(`Task "${updatedTasks[taskIndex].name}" completed! Earned ${pointsEarned} XP.`);
    }
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
              <Text style={{ display: 'block', textAlign: 'center', marginTop: 8 }}>
                Experience: {experience} / {building.level * 100}
              </Text>
              <Button
                type="primary"
                block
                style={{ marginTop: 16 }}
                onClick={handleUpgrade}
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
                <Option value="Smart Curtain">Smart Curtain</Option>
                <Option value="Green Wall">Green Wall</Option>
              </Select>
            </Card>
          </Col>
        </Row>

        <Card style={{ marginTop: 24 }} title="Energy Saving Tasks">
          <List
            itemLayout="horizontal"
            dataSource={tasks}
            renderItem={task => (
              <List.Item
                actions={[
                  <Button 
                    type="primary" 
                    onClick={() => handleCompleteTask(task.id)} 
                    disabled={task.completed}
                  >
                    {task.completed ? 'Completed' : 'Complete Task'}
                  </Button>
                ]}
              >
                <List.Item.Meta
                  title={<Text strong>{task.name} (+{task.experiencePoints} XP)</Text>}
                  description={task.description}
                />
                {task.completed && <Text type="success" style={{ marginLeft: 16 }}>✓</Text>}
              </List.Item>
            )}
          />
        </Card>

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