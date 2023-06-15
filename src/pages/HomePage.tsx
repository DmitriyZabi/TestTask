import { useDispatch, useSelector } from 'react-redux'
import { IStore } from '../redux/store'
import { useEffect } from 'react'
import { fetchPostsRequest } from '../redux/posts/actions'

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
          return <>Loading...</>
        }
        if (error !== null) {
          return <>Error: {error}</>
        }
        return <>{data !== null && data.map((x) => <p>{x.title}</p>)}</>
      })()}
    </>
  )
}
