import React from 'react'
import PropTypes from 'prop-types'
import './KeyInfo.css'


/**
 * @description Component to show Keyinfo information.
 * 
 * @component
 * @param {String} icon  Image of keyinfo.
 * @param {Number} value Value of keyinfo.
 * @param {String} type type of keyInfo. 
 * @returns { HTMLElement } return keyInfo element with type , value and icon.
 */

const InfoKey = ({ icon, value, type }) => {

  // function add unity automatically depends on the type of KeyInfo
  const unity = (item) => {
    if (item.type === "Calories") {
      return "KCal"
    } else {
      return "g"
    }
  }

  return (
    <figure className='keyInfo-container'>
      <img src={icon} alt={value} />
      <figcaption>
        <p className="value">{value}{unity({ type })}</p>
        <p className="type">{type}</p>
      </figcaption>
    </figure>
  )
}

InfoKey.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default InfoKey
