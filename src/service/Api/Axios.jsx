import { useEffect, useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import data from '../../asset/data.json'

/** 
* @description Variable to choose the environment to access the database. 
* In order use mock environement please set "mock_env" to "true". 
* If "true" It will get data drom asset/data.json
* If "false". Api will be called by using axios in function FetchData().
* @type {boolean}
 */
const mock_env = false

/**
 * @description Base Url for production.
 * @type {string}
 */
const productionUrl = 'http://localhost:3000/user/'

/**
 * @description Endpoint for production API.
 * 
 * @param {string} baseUrl 
 * @example http://localhost:3000/user
 * @param {string} id User id.
 * @returns { String[] } Return array of texts of url endpoints.
 */
const endpoints_production = (baseUrl, id) => {
    const urlProfile = baseUrl + id
    const urlActivity = baseUrl + id + "/activity"
    const urlAverageSession = baseUrl + id + "/average-sessions"
    const urlPerformance = baseUrl + id + "/performance"
    return ([urlProfile, urlActivity, urlAverageSession, urlPerformance])
}

/**
 * @description Function FetchData() using asiox with async/await method if "mock_env = false"
 * If "mock_env = true", data will be imported from  '../../asset/data.json'.
 * @methods
 * @param {string} id User id which passed from Dashboard.jsx when the function is called.
 * @returns { Object[]} Return array of Objects of user data.
 */
export const FetchData = (id) => {
    const [userProfileData, setUserProfileData] = useState([])
    const [userActivityData, setUserActivityData] = useState([])
    const [userAverageSessionData, setUserAverageSessionData] = useState([])
    const [userPerformanceData, setUserPerformanceData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    const userId = parseInt(id)

    useEffect(() => {
        let endpoints = []
        let baseUrl = ""

        const getData = async () => {
            if (mock_env) {
                console.log("!!Use Mock Database!!")
                setIsLoading(false)
                setError(false)
                setUserProfileData(data.user.find((user) => user.id === userId))
                setUserAverageSessionData(data.averageSessions.find((user) => user.userId === userId))
                setUserActivityData(data.activity.find((user) => user.userId === userId))
                setUserPerformanceData(data.performance.find((user) => user.userId === userId))
            } else {
                baseUrl = productionUrl
                endpoints = endpoints_production(baseUrl, userId)
                console.log(endpoints)
                console.log("!!Use API port 3000 from Backend!!")
                try {
                    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
                        .then(axios.spread((...allData) => {
                            console.log(allData)
                            setIsLoading(false)
                            setUserProfileData(allData[0].data.data)
                            setUserActivityData(allData[1].data.data)
                            setUserAverageSessionData(allData[2].data.data)
                            setUserPerformanceData(allData[3].data.data)
                        })
                        )
                }
                catch (errors) {
                    setError(errors.message)
                }
            }
        }
        //Call function getData()
        getData()

    }, [id, userId])
    return { userActivityData, userAverageSessionData, userPerformanceData, userProfileData, isLoading, error }
}

FetchData.propTypes = {
    id: PropTypes.string.isRequired
}

