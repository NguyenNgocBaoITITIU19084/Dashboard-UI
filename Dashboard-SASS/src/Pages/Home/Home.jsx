import Chartbox from '../../components/Chartbox/Chartbox';
import Topbox from '../../components/Topbox/Topbox';
import BarChartbox from '../../components/BarChartbox/BarChartbox.jsx';
import PieChartBox from '../../components/PieChart/PieChartbox.jsx';
import AreaChartbox from '../../components/AreaChartbox/AreaChartbox.jsx';

import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from '../../data.js';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        <Topbox />
      </div>
      <div className='box box2'>
        <Chartbox
          title={chartBoxUser.title}
          color={chartBoxUser.color}
          chartData={chartBoxUser.chartData}
          percentage={chartBoxUser.percentage}
          number={chartBoxUser.number}
          dataKey={chartBoxUser.dataKey}
        />
      </div>
      <div className='box box3'>
        <Chartbox
          title={chartBoxProduct.title}
          color={chartBoxProduct.color}
          chartData={chartBoxProduct.chartData}
          percentage={chartBoxProduct.percentage}
          number={chartBoxProduct.number}
          dataKey={chartBoxProduct.dataKey}
        />
      </div>
      <div className='box box4'>
        <PieChartBox />
      </div>
      <div className='box box5'>
        <Chartbox
          title={chartBoxRevenue.title}
          color={chartBoxRevenue.color}
          chartData={chartBoxRevenue.chartData}
          percentage={chartBoxRevenue.percentage}
          number={chartBoxRevenue.number}
          dataKey={chartBoxRevenue.dataKey}
        />
      </div>
      <div className='box box6'>
        <Chartbox
          title={chartBoxConversion.title}
          color={chartBoxConversion.color}
          chartData={chartBoxConversion.chartData}
          percentage={chartBoxConversion.percentage}
          number={chartBoxConversion.number}
          dataKey={chartBoxConversion.dataKey}
        />
      </div>
      <div className='box box7'>
        <AreaChartbox />
      </div>
      <div className='box box8'>
        <BarChartbox
          title={barChartBoxRevenue.title}
          color={barChartBoxRevenue.color}
          dataKey={barChartBoxRevenue.dataKey}
          chartData={barChartBoxRevenue.chartData}
        />
      </div>
      <div className='box box9'>
        <BarChartbox
          title={barChartBoxVisit.title}
          color={barChartBoxVisit.color}
          dataKey={barChartBoxVisit.dataKey}
          chartData={barChartBoxVisit.chartData}
        />
      </div>
    </div>
  );
};

export default Home;
