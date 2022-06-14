import { useEffect, useState } from 'react'
import axios from 'axios'

/** 
* @description Variable to choose the environment.
    In order to test with mock environement please change mock_env to "true". It will retrieve 
    the below base url. Url is depend on which environment we want to use.  
* @type {boolean}
 */

  let mock_env = true

/**
 * @description Production URL
 * @type {string}
 */
const productionUrl = 'http://localhost:3000/user/'



/**
 * @description Mock URL
 * @type {string}
 */
const mockUrl = 'http://localhost:5050'

/**
 * @description Endpoint for production API
 * @param {string} baseUrl 
 * @param {string} id 
 * @returns Array
 */
const endpoints_production = (baseUrl, id) => {
    const urlProfile = baseUrl + id
    const urlActivity = baseUrl + id + "/activity"
    const urlAverageSession = baseUrl + id + "/average-sessions"
    const urlPerformance = baseUrl + id + "/performance"
    return ([urlProfile, urlActivity,  urlAverageSession, urlPerformance ])
}

/**
 * Endpoints for mock API
 * @param {string} baseUrl 
 * @returns Array
 */
const endpoints_mock = (baseUrl) => {
    const urlProfile = baseUrl + "/user"
    const urlActivity = baseUrl + "/activity"
    const urlAverageSession = baseUrl + "/average-sessions"
    const urlPerformance = baseUrl + "/performance"
    return ([urlProfile, urlActivity,  urlAverageSession, urlPerformance ])
}


/**
 * Function FetchData
 * @param {string} id 
 * @returns 
 */
export const FetchData = (id) => {
    const [userProfileData, setUserProfileData] = useState([])
    const [userActivityData, setUserActivityData] = useState([])
    const [userAverageSessionData, setUserAverageSessionData] = useState([])
    const [userPerformanceData, setUserPerformanceData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

  console.log("mockEnv in axios", mock_env)
    useEffect(() => {
        let endpoints =[]
        let baseUrl = ""

        if(mock_env){
            baseUrl = mockUrl
            endpoints=endpoints_mock(baseUrl)
            console.log(endpoints)
        }else{
            baseUrl = productionUrl
            endpoints= endpoints_production(baseUrl, id)
            console.log(endpoints)
        }

        const fetchData = async () => {
            try {
                await axios.all(
                    endpoints.map((endpoint) =>
                        axios.get(endpoint)
                    ))
                    .then(axios.spread((...allData) => {
                        if (mock_env) {
                            setIsLoading(false)
                            setUserProfileData(allData[0].data.find((user) => {
                                return user.id === parseInt(id)
                            }))
                            setUserActivityData(allData[1].data.find((user) => {
                                return user.userId === parseInt(id)
                            }))
                            setUserAverageSessionData(allData[2].data.find((user) => {
                                return user.userId === parseInt(id)
                            }))
                            setUserPerformanceData(allData[3].data.find((user) => {
                                return user.userId === parseInt(id)
                            }))
                        } else {
                            setIsLoading(false)
                            setError(false)
                            setUserProfileData(allData[0].data.data)
                            setUserActivityData(allData[1].data.data)
                            setUserAverageSessionData(allData[2].data.data)
                            setUserPerformanceData(allData[3].data.data)
                        }

                    })
                    )
            }
            catch (errors) {
                console.log("error message",errors.message)
                setError(true)
            }
        }

        fetchData()

    }, [id])
    return { userActivityData, userAverageSessionData, userPerformanceData, userProfileData, isLoading ,error}

}