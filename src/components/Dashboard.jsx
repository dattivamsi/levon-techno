import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../store/slices/dataSlice';
import { Row, Col } from 'antd';
import LineChartWidget from './Widgets/LineChartWidget';
import BarChartWidget from './Widgets/BarChartWidget';
import PieChartWidget from './Widgets/PieChartWidget';
import ActivityFeed from './Widgets/ActivityFeed';


const Dashboard = () => {
  const dispatch = useDispatch();
  const { userActivity, salesData, userDemographics, recentActivity, status, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <LineChartWidget data={userActivity} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <BarChartWidget data={salesData} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <PieChartWidget data={userDemographics} />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <ActivityFeed data={recentActivity} />
      </Col>
    </Row>
  );
};

export default Dashboard;
