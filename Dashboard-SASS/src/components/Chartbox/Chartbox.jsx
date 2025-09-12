import { FaRegUser } from 'react-icons/fa';
import { SiSimpleanalytics } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import './Chartbox.scss';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Chartbox = ({ title, number, dataKey, percentage, chartData, color }) => {
  return (
    <div className='chartbox'>
      <div className='infor'>
        <div className='title'>
          <SiSimpleanalytics />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link className='view' style={{ color: color }}>
          View All
        </Link>
      </div>
      <div className='chart'>
        <div className='chart-area'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart width={300} height={100} data={chartData}>
              <Line
                type='monotone'
                dataKey={`${dataKey}`}
                stroke='#8884d8'
                strokeWidth={2}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                labelStyle={{ display: 'none' }}
                position={{ x: 50, y: 70 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='chart-text'>
          <h3>{percentage}</h3>
          <span>this month</span>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
