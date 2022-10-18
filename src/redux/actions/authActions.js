import { _postApi } from '../../apiCall';
import { CREATE_USER, UPDATE_USER, DELETE_USER } from './authConstants'

export function createUser({ data }, cb = (f) => f, err = (f) => f) {
  _postApi(`agents`,
    data, resp => {
      console.log(resp);
      // return {
      //   type: CREATE_USER,
      //   payload: data,
      // }
      cb(resp)
    }, error => { console.error(err); err(error) })

}