import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import './PieChartbox.scss';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartBox = () => {
  return (
    <div className='Piechart'>
      <h3>Total Devices</h3>
      <div className='chart'>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='content'>
        {data.map((data, i) => (
          <div className='item'>
            <div className='title'>
              <div className='dot' style={{ backgroundColor: COLORS[i] }}></div>
              <span>Moblie</span>
            </div>
            <span className='value'>100</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
