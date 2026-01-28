import React, { useState } from "react";
import { tableData } from "../../mocks/tableData"
import Chart from "../Chart/Chart";
import './Table.css'

function Table() {
    const [expandedRows, setExpandedRows] = useState<Set<string>>(
        new Set([tableData[0]?.name || ""]) // Открывается первый график по дефолту, для наглядности
    );
    const formatNumber = (num: number) => new Intl.NumberFormat('ru-RU').format(num);

    const getYesterdayClass = (percent: number) =>
        percent < 0 ? 'negative-change' : percent > 0 ? 'positive-change' : '';

    const getYesterdayTextColor = (percent: number) =>
        percent < 0 ? 'text-red' : 'text-green';

    const getSameWeekdayClass = (current: number, sameWeekday: number) =>
        current > sameWeekday ? 'positive-change' : ''

    const toggleRow = (name: string) => {
        setExpandedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(name)) {
                newSet.delete(name);
            } else {
                newSet.add(name);
            }
            return newSet;
        });
    };

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
                {tableData.map((row) => {
                    const isExpanded = expandedRows.has(row.name);

                    return (
                        <React.Fragment key={row.name}>
                            <tr key={row.name} onClick={() => toggleRow(row.name)}>
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

                            {isExpanded && (
                                <tr className="chart-row">
                                    <td colSpan={4}>
                                        <Chart rowName={row.name} />
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    );
                })}
            </tbody>
        </table>
    )
}

export default Table
