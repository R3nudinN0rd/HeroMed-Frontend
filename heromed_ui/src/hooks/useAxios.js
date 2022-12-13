import { useState, useEffect } from 'react'
import axios from 'axios'
import { endpointApiPath } from '../configs/endpointsConfig'

/**
 * Returns data from http://localhost:8080/ + url
 *
 * @param {string} url Url to actual endpoint (Example: /events/all)
 * @param {string} method GET / POST / PUT / PATCH / DELETE
 * @param {json} body JSON with data in case of POST / PUT / PATCH
 * @param {number} headers
 *
 * @return {json} json data
 */
const useAxios = ({ url, method, body = null, headers = null }) => {
  const [data, setData] = useState(null)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(true)

  const fetchData = () => {
    axios[method](endpointApiPath + url, { accept: '*/*', 'access-control-allow-origin': '*', ...headers }, body)
      .then((res) => {
        setData(res.data)
        setResponse(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, response, error, loading }
}

export default useAxios
