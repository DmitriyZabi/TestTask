import axios from 'axios'
import { IPost } from '../redux/posts/models'

export const fetchPosts = () =>
  axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
