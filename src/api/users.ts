import axios from 'axios'
import { IUser } from '../redux/users/models'

export const fetchUser = (userId: number) =>
  axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`)
