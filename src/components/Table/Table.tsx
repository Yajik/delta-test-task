import { tableData } from "../../mocks/tableData"
import './Table.css'

function Table() {

    const formatNumber = (num: number) => new Intl.NumberFormat('ru-RU').format(num);

    const getYesterdayClass = (percent: number) =>
        percent < 0 ? 'negative-change' : percent > 0 ? 'positive-change' : '';

    const getYesterdayTextColor = (percent: number) =>
        percent < 0 ? 'text-red' : 'text-green';

    const getSameWeekdayClass = (current: number, sameWeekday: number) =>
        current > sameWeekday ? 'positive-change' : ''

    return (
        <table className="table">
            <thead className="thead">
                <tr>
                    <th>Показатель</th>
                    <th className="current-day">Текущий день</th>
                    <th>Вчера</th>
                    <th>Этот день недели</th>
                </tr>
            </thead>

            <tbody className="tbody">
                {tableData.map((row) => (
                    <tr key={row.name}>
                        <td className="align-left">{row.name}</td>
                        <td className="current-day">{formatNumber(row.currentDay)}</td>
                        <td className={getYesterdayClass(row.yesterday.percent)}>
                            {formatNumber(row.yesterday.value)}{' '}
                            <span className={getYesterdayTextColor(row.yesterday.percent)}>
                                {row.yesterday.percent}%
                            </span>
                        </td>
                        <td className={getSameWeekdayClass(row.currentDay, row.sameWeekday)}>
                            {formatNumber(row.sameWeekday)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table