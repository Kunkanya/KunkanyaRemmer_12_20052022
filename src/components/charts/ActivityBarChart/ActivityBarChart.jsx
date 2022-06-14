import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ActivityBarChart.css'

/**
 * @param {Array} payload - value to show in tooltip.
 * @param {Boolean} activ  - state of tooltip.
 * @returns { HTMLElement } : return value for each tooltip. 
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip-wrapper">
                <p className="label">{`${payload[0].value} kg`}</p>
                <p className="label">{`${payload[1].value} Kcal`}</p>
            </div>
        )
    }
}

//Function to get the date for XAxis.  
const formatXAxis = (day) => {
    var date = new Date(day)
    return date.getDate()
}

/**
 * @description Component user´s average session line chart using Recharts.
 * 
 * @component
 * @param {Object} data Data passing from Dashboard page. 
 * @returns {HTMLElement} Return user´s activity barchart.
 */
const ActivityBarChart = ({ data }) => {
    return (
        <div className="activity-container">
            {
                <ResponsiveContainer width="100%" height="100%" >
                    <BarChart
                        data={data.sessions}
                        margin={{
                            top: 100,
                            right: 20,
                            left: 20,
                            bottom: 5,
                        }}
                        barGap="8"
                    >
                        <CartesianGrid strokeDasharray="3 2"
                            vertical={false}
                            horizontalPoints={[180, 100]}
                        />
                        <XAxis
                            dataKey={"day"}
                            fontSize={12}
                            tickMargin={20}
                            tickSize={0}
                            tickFormatter={formatXAxis}
                        />
                        <YAxis
                            hide={"true"}
                            yAxisId="cal"
                        />
                        <YAxis
                            yAxisId="kilo"
                            orientation={"right"}
                            tickMargin={20}
                            tickSize={0}
                            tickCount={3}
                            type="number"
                            domain={["dataMin-2", "dataMax+1"]}
                            allowDataOverflow={true}
                        />
                        <Tooltip
                            offset={40}
                            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
                            content={<CustomTooltip />}
                        />
                        <Legend width={300}
                            wrapperStyle={{
                                top: 20,
                                right: 20
                            }}
                            iconSize={7}
                            payload={[
                                {
                                    value: "Poids (Kg)",
                                    type: "circle",
                                    id: "ID01"
                                },
                                {
                                    value: "Calories brûlées (kCal)",
                                    type: "circle",
                                    id: "ID02",
                                    color: "#E60000"
                                }
                            ]}
                        />
                        <Bar
                            dataKey="kilogram"
                            fill="#282D30"
                            yAxisId="kilo"
                            radius={[10, 10, 0, 0]}
                            barSize={7}
                        />
                        <Bar
                            dataKey="calories"
                            yAxisId="cal"
                            fill="#E60000"
                            radius={[10, 10, 0, 0]}
                            barSize={7} />
                    </BarChart>
                </ResponsiveContainer>
            }
        </div>
    )
}

ActivityBarChart.propTypes = {
    data: PropTypes.object.isRequired
}

CustomTooltip.propTypes={
    active : PropTypes.bool,
    payload : PropTypes.array
}


export default ActivityBarChart
