import React, { useState } from "react";
import { tableData } from "../../mocks/tableData"
import Chart from "../Chart/Chart";
import './Table.css'

function Table() {
    const [expandedRows, setExpandedRows] = useState<Set<string>>(
        // Открывается первый график по дефолту, для наглядности
        new Set([tableData[0]?.name || ""]) 
    );

    const formatNumber = (num: number) => new Intl.NumberFormat('ru-RU').format(num); // Разделение больших чисел пробелами

    const getYesterdayClass = (percent: number) =>
        // Установка цвета ячейки для столбца "вчера", зависит от процента
        percent < 0 ? 'negative-change' : percent > 0 ? 'positive-change' : ''; 

    const getYesterdayTextColor = (percent: number) =>
        // Установка цвета текста для процента "вчера", зависит от процента
        percent < 0 ? 'text-red' : 'text-green';

    const getSameWeekdayClass = (current: number, sameWeekday: number) =>
        // Установка цвета ячейки для столбца "Этот день недели", зависит от разницы "Текущий день" и "Этот день недели"
        current > sameWeekday ? 'positive-change' : ''

    const toggleRow = (name: string) => {
        // Переключение состояния "Показать/Скрыть" график по нажатию на строку
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
                                        {/* Подключение компонента графика */}
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
