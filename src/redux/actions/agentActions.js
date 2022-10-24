import { _fetchApi, URL_DATA } from '../../api'
import { CREATE_AGENT, UPDATE_AGENT, DELETE_AGENT } from './agentConstants'



export const getAgents = (obj) => {
  _fetchApi(
    `/getTenantList?${URL_DATA}`,
    (data) => {
      if (data.success) {
      }
      // console.log(data.results)
      setResult(data.results[0])
    }
  )


}