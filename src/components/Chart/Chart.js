import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = ({points}) => {
    console.log(points);

    const valuesList = points.map(point => point.value);

    const maxValue = Math.max(...valuesList);

    return <div className={'chart'}>{points.map(point => {
        return <ChartBar key={point.label} label={point.label} value={point.value} max={maxValue}/>
    })}</div>
}

export default Chart