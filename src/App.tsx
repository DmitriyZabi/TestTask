import { useDispatch } from 'react-redux'
import { fetchPostsRequest } from './redux/posts/actions'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IStore } from './redux/store'

function App() {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSelector((store: IStore) => store.posts)

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [dispatch])

  if (isLoading) {
    return <>Loafong...</>
  }
  if (error !== null) {
    return <>Error: {error}</>
  }
  return <>{data !== null && data.map((x) => <p>{x.title}</p>)}</>
}

export default App
