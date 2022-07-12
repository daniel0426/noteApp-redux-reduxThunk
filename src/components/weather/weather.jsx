import React from 'react';
import {Button, Descriptions, Spin} from 'antd';
import { LoadingOutlined, QuestionOutlined } from '@ant-design/icons';

const loadingIcon = <LoadingOutlined style={{fontSize:24}} spin />

const Weather = ({data, error, loading, getWeatherData}) => {
  return (
    <div
      style={{
        padding: '1rem ',
        margin: '1rem 0',
        border: '1px solid rgba(0,0,0,0.15)'
      }}
    >
      <Button onClick={getWeatherData} style={{marginBottom:"1rem"}}>Show Weather</Button>
      <Descriptions bordered title="Weather">
        <Descriptions.Item label="Area">
          {loading && <Spin indicator={loadingIcon} />}
          {error ? <QuestionOutlined /> : data.area}
        </Descriptions.Item>
        <Descriptions.Item label="Temp">
          {loading && <Spin indicator={loadingIcon} />}
          {error ? <QuestionOutlined /> : `${data.temp}°C`}
        </Descriptions.Item>
        <Descriptions.Item label="Weather">
          {loading && <Spin indicator={loadingIcon} />}
          {error ? <QuestionOutlined /> : data.weather}
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Weather;