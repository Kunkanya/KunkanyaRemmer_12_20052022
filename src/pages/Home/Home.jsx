import { React } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import NavbarVertical from '../../components/NavbarVertical/NavbarVertical';
import './Home.css'


/**
 * @description Home page
 * @returns { HTMLElement} Return Home page for the SportSee app.
 */
const Home = () => {

  return (
    <div className='home-container'>
      <Header />
      <div className="content-wrapper">
        <NavbarVertical />
        <main>
          <h1>Bienvenue sur <span style={{ "color": "red" }}> SportSee </span></h1>
          <div className='user'>
            <Link to={'user/12'}><h4>User 12</h4></Link>
            <Link to={'user/18'}><h4>User 18</h4></Link>
          </div>

        </main>
      </div>

    </div>
  )
}

export default Home
