import { CREATE_USER, UPDATE_USER, DELETE_USER } from './authConstants'

export function createUser({data}) {
  return {
    type: CREATE_USER,
    payload: data,
  }
}