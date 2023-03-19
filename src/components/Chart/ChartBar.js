import './ChartBar.css'

const ChartBar = ({label, value, max}) => {
    let barFill = '0%';
    console.log(label, value, max);
    if (max > 0) {
        barFill = Math.round((value / max) * 100) + '%';
    }


    return (
        <div className={'chart-bar'}>
            <div className={'chart-bar__inner'}>
                <div className={'chart-bar__fill'} style={{height: barFill}}></div>
            </div>
            <div className={'chart-bar__label'}>{label}</div>
        </div>)
}

export default ChartBar