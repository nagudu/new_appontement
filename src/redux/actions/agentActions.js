import { _fetchApi, URL_DATA } from '../../api'
import { CREATE_AGENT, UPDATE_AGENT, DELETE_AGENT } from './agentConstants'



export const getAgents = (obj) => {
  const url_data = Object.keys(obj).map(k => `${k}=${obj[k]}`)
  _fetchApi(
    `/getTenantList?${url_data}`,
    (data) => {
      if (data.success) {
      }
      // console.log(data.results)
      setResult(data.results[0])
    }
  )


}