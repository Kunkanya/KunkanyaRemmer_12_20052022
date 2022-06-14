import React from 'react'
import YogaIcon from '../../asset/yoga-icon.svg'
import SwimIcon from '../../asset/swim-icon.png'
import BicycleIcon from '../../asset/bicycle-icon.png'
import WeightIcon from '../../asset/weight-icon.png'
import './NavbarVertical.css'

/**
 * @description Vertical navigation bar.
 * @return {HTMLElements} Return vertical navigation bar.
 */
const NavbarVertical = () => {
  return (
    <aside className="nav-vertical">
      <img src={YogaIcon} alt="YogaIcon" />
      <img src={SwimIcon} alt="swimIcon" />
      <img src={BicycleIcon} alt="swimIcon" />
      <img src={WeightIcon} alt="swimIcon" />
      <p className='copyright'>Copyright, SportSee 2020</p>
    </aside>

  )
}

export default NavbarVertical
