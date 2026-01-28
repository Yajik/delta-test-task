import './Chart.css'
import { chartDataByIndicator } from '../../mocks/chartData';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

type Props = {
    rowName: string
}


function Chart ({rowName} : Props){
  const data = chartDataByIndicator[rowName] || [];

  if (data.length === 0) {
    return <div className='no-data'>
      Нет данных
    </div>;
  }

  return (
    <div className='wrapper'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="x" tick={{ fontSize: 12 }} />
          <YAxis 
            tick={{ fontSize: 12 }} 
            tickFormatter={(value) => value.toLocaleString('ru-RU')}
          />
          <Line 
            type="monotone" 
            dataKey="y" 
            stroke="#4caf50" 
            strokeWidth={2} 
            dot={{ r: 4 }} 
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;