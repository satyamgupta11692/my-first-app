
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) =>{
    console.log(props.dataPoints);
    const dataPointsValues =props.dataPoints.map(dataPoint =>dataPoint.value);
   console.log(dataPointsValues);
    const totalMaximum = Math.max(...dataPointsValues);
    console.log(totalMaximum);
    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
    </div>

};

export default Chart;