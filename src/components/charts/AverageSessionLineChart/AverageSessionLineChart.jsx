import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './AverageSessionLineChart.css'


/**
 * @description Function to get value for XAxis.  
 * @param {Number} day  
 * @returns {String} Return string of weekday with format "D". 
 * @example return "L" , "M.
 */
const FormatXAxis = (day) => {
  const weekday = new Array(7)
  weekday[1] = 'L'
  weekday[2] = 'M'
  weekday[3] = 'M'
  weekday[4] = 'J'
  weekday[5] = 'V'
  weekday[6] = 'S'
  weekday[7] = 'D'
  return weekday[day]
}

/**
 * 
 * @param {Boolean} active Status of the tooltip.
 * @param {Array} payload Text value of the tooltip. 
 * @returns {HTMLElement} Return custom text for tooltip.
 */
const CustomTooltipContent = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="average-tooltip-wrapper">
        <p className="label">{`${payload[0].value} mins`}</p>
      </div>
    )
  }
}

/**
 * @description Get position of the props and add sgv rectangle for the background after active dot.
 * @param {Number} props Get the position from property of cursor.
 * @returns {HTMLElement} Return sgv rectangle.
 */
const CustomTooltipCursor = (props) => {
  const cx = props.points[1].x
  const cy = props.points[1].y + 180

  return (
    <svg x={cx} width={cy + cx} height={264}>
      <rect width={cy} height={264} fill="rgba(0,0,0,0.15)" />
    </svg>
  )
}

/**
 * @description Component user´s average session line bar using Recharts.
 * 
 * @component
 * @param {Object} data Data passing from Dashboard page.
 * @returns {HTMLElement} Return user´s average session linechart.
 */
const AverageSessionLineChart = ({ data }) => {
  return (
    <div className="box-container">
      <h4>Durée moyenne des sessions</h4>
      <ResponsiveContainer width="100%" height="100%"
      >
        <LineChart
          data={data.sessions}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day"
            fontSize={12}
            tickMargin={0}
            tickSize={0}
            tick={{
              fill: '#FFF',
              fontSize: '12px',
              opacity: 0.5,
            }}
            axisLine={false}
            allowDataOverflow={true}
            stroke="white"
            tickFormatter={FormatXAxis}
          />

          <YAxis dataKey="sessionLength"
            type='number'
            domain={["dataMin-5", "dataMax +20"]}
            axisLine={false}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltipContent />}
            cursor={<CustomTooltipCursor />}
          />

          <Line type="monotoneX"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            activeDot={{
              stroke: 'rgba(255, 255, 255, 0.3)',
              strokeWidth: 10,
              r: 4,
            }}
            dot={false}
            strokeDashArray="4 4" />

        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

AverageSessionLineChart.propTypes = {
  data: PropTypes.object.isRequired
}

FormatXAxis.propTypes = {
  day: PropTypes.number.isRequired
}

CustomTooltipContent.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

CustomTooltipCursor.propTypes ={
  props : PropTypes.number
}

export default AverageSessionLineChart
