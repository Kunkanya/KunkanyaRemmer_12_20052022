import React from 'react'
import PropTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './PerformanceChart.css'

/**
 * @description Function to convert user´s performance in French language to show in PolarAngleAxis
 * 
 * @param {String} item type of performance  
 * @returns {String} return type of performance in french language
 */
const tickFormatter = (item) => {
    const tickData = {
        "kind": {
            "6": "Intensité",
            "1": "Cardio",
            "2": "Energie",
            "3": "Endurance",
            "4": "Force",
            "5": "Vitesse"
        }
    }
    return tickData.kind[item]
}

/**
 * @description Component user´s performance radar chart using Recharts to create .
 * 
 * @component
 * @param {Object} data Data passing from Dashboard page. 
 * @returns {HTMLElement} Return user´s performance Radarchart chart.
 */
const PerformanceChart = ({ data }) => {
    return (
        <div className='performance box-container'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={data.data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5
                    }}>
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ fill: "white", fontSize: "10" }}
                        tickFormatter={tickFormatter}
                        radius="30%"
                    />
                    <PolarRadiusAxis
                        tick={false}
                        axisLine={false}
                        domain={[0, "dataMax+40"]}
                    />
                    <Radar name="performace"
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

PerformanceChart.propTypes = {
    data: PropTypes.object.isRequired
}

tickFormatter.propTypes = {
    item : PropTypes.string.isRequired
}

export default PerformanceChart
