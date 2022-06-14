import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import './ScoreChart.css'

/**
 * @description Component User's score Pie Chart using Recharts. 
 * 
 * @component
 * @param {Number} score User's scores.  
 * @returns {HTMLElement} Return user´s score chart.
 */

const ScoreChart = ({ score }) => {

    const scoreValue = score * 100

    //Mock data for outer piechart. First data is to show user`s score in red .
    //another data is to get tranparent effect for the rest of the circle in piechart.
    const data = [
        {
            "name": "userScore2",
            "score": scoreValue,
            "fill": "#E60000"
        },
        {
            "name": "userScore",
            "score": 100,
            "stroke": "transparent",
            "fill": "transparent"
        }
    ]

    //Mock data for inner piechart which shows in white 
    const data02 = [
        {
            "name": "userScore",
            "score2": 100,
            "fill": "white"

        }
    ]
    return (
        <div className=" score box-container">
            <div className="score-textbox">
                <p className='score-value'>{scoreValue}%</p>
                <p className='score-text'>de votre objectif</p>
            </div>

            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="score"
                        startAngle={-270}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={74}
                        cornerRadius="50%" 
                        />
                    <Pie
                        data={data02}
                        dataKey="score2"
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={60} />
                </PieChart>
            </ResponsiveContainer>

        </div>
    )
}

ScoreChart.propTypes = {
    score: PropTypes.number.isRequired
}

export default ScoreChart
