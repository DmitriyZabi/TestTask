import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../redux/store'
import { useEffect } from 'react'
import { fetchPostsRequest } from '../redux/posts/actions'
import { Posts } from '../components/posts/Posts'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

export function HomePage() {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSelector((store: IStore) => store.posts)

  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [dispatch])

  return (
    <>
      <h1>Главная</h1>
      {(function () {
        if (isLoading) {
          return <Spinner animation="border" variant="primary" />
        }
        if (error !== null) {
          return <Alert variant="danger">{`Fetch posts error: ${error}`}</Alert>
        }
        return <>{data !== null && <Posts data={data} />}</>
      })()}
    </>
  )
}
