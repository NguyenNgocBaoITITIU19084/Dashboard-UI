import './BarChartbox.scss';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

const BarChartbox = ({ title, color, dataKey, chartData }) => {
  return (
    <div className='BarChart'>
      <h3>{title}</h3>
      <div className='chart'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={100} height={40} data={chartData}>
            <Bar dataKey={`${dataKey}`} fill={`${color}`} />
            <Tooltip labelStyle={{ display: 'none' }} cursor={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartbox;
