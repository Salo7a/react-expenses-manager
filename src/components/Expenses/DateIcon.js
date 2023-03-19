import './DateIcon.css'

export default function DateIcon({date}) {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', {month: 'long'});
    const year = date.getFullYear();
    return (<div className={'date-icon'}>
        <time dateTime="2014-09-20" className="icon">
            <span className={'date-icon-year'}>{year}</span>
            <span className={'date-icon-day'}>{day}</span>
            <span className={'date-icon-month'}>{month}</span>
        </time>
    </div>)
};