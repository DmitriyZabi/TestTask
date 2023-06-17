import axios from 'axios'
import { IPost } from '../redux/posts/models'

export const fetchPosts = (userId: string | null) => {
  const filterString = userId !== null ? `?userId=${userId}` : ''
  return axios.get<IPost[]>(
    `https://jsonplaceholder.typicode.com/posts${filterString}`
  )
}
