//import { GetAverageSessionDataById } from '../service/Api/Api'
import { FetchData } from '../../service/Api/Axios'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Error404 from '../Error404/Error404'
import NavbarVertical from '../../components/NavbarVertical/NavbarVertical'
import ActivityBarChart from '../../components/charts/ActivityBarChart/ActivityBarChart'
import AverageSessionLineChart from '../../components/charts/AverageSessionLineChart/AverageSessionLineChart'
import PerformanceChart from '../../components/charts/PerformanceChart/PerformanceChart'
import ScoreChart from '../../components/charts/ScoreChart/ScoreChart'
import KeyInfo from '../../components/KeyInfo/KeyInfo'
import CaloriesIcon from '../../asset/calories-icon.png'
import ProteinesIcon from '../../asset/protein-icon.png'
import CarbsIcon from '../../asset/carbs-icon.png'
import FatIcon from '../../asset/fat-icon.png'
import './Dashboard.css'
/**
 * @description Dashboard component shows all the graphics according to each user.
 * @returns {HTMLElement} Return Dashboard page for user´s sport activities with different types of chart.
 */
const Dashboard = () => {

  const userId = useParams().id
  console.log(userId)

  //Get user id from the url
  const locationId = window.location.href.split('/')[4]
  //Call function Fetchdata() and restore to variable data
  const data = FetchData(locationId)
  //Get the information
  const isLoading = data.isLoading
  const userData = data.userProfileData
  
  //check if data in json contain "userData.todayScore" or "userData.score" 
  const score = () => {
    return userData.score ? userData.score : userData.todayScore 
  }

  return (
    <>
      {data.error || userData === undefined ? <Error404 message={data.error}/> :
        (
          <>
            {isLoading ? <div>Loading....</div> :
              <>
                <div className='home-container'>
                  <Header />
                  <div className="content-wrapper">
                    <NavbarVertical />
                    <main className="contents-container" >
                      <div className="content-header" key="1">
                        <h1>Bonjour <span style={{ color: "red" }} key="1">{userData.userInfos.firstName}</span></h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
                      </div>
                      <div className="grid-container">
                        <section className="left">
                          <div className="activity">
                            <ActivityBarChart data={data.userActivityData} />
                          </div>
                          <div className="gridBelow-container">
                            <AverageSessionLineChart data={data.userAverageSessionData} />
                            <PerformanceChart data={data.userPerformanceData} />
                            <ScoreChart score={score()} />
                          </div>
                        </section>
                        <aside className="right">
                          <KeyInfo icon={CaloriesIcon} value={userData.keyData.calorieCount} type={"Calories"} />
                          <KeyInfo icon={ProteinesIcon} value={userData.keyData.proteinCount} type={"Proteines"} />
                          <KeyInfo icon={CarbsIcon} value={userData.keyData.carbohydrateCount} type={"Glucides"} />
                          <KeyInfo icon={FatIcon} value={userData.keyData.lipidCount} type={"Lipides"} />
                        </aside>
                      </div>
                    </main>

                  </div>

                </div>
              </>
            }
          </>
        )
        }
    </>



  )

}

export default Dashboard

