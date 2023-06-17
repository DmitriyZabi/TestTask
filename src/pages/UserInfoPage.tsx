import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { IStore } from '../redux/store'
import { fetchUsersRequest } from '../redux/users/actions'
import { useEffect } from 'react'
import { fetchPostsRequest } from '../redux/posts/actions'
import { Posts } from '../components/posts/Posts'
import { Alert, Button, Nav, Spinner } from 'react-bootstrap'
import { ChevronLeft as BackIcon } from 'react-bootstrap-icons'
import buttonBackStyles from '../styles/ButtonBack.module.scss'
import { UserCard } from '../components/userCard/UserCard'

export function UserInfoPage() {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const {
    data: users,
    error: usersError,
    isLoading: usersLoading,
  } = useSelector((store: IStore) => store.users)
  const {
    data: posts,
    error: postsError,
    isLoading: postsLoading,
  } = useSelector((store: IStore) => store.posts)

  useEffect(() => {
    if (userId && !isNaN(parseInt(userId))) {
      dispatch(fetchUsersRequest(userId))
      dispatch(fetchPostsRequest(userId))
    }
  }, [dispatch])

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Информация о пользователе</h1>
        <NavLink to="/" className={buttonBackStyles.button}>
          <Button variant="success">
            <BackIcon /> Назад
          </Button>
        </NavLink>
      </div>
      {(function () {
        if (usersLoading) {
          return <Spinner animation="border" variant="primary" />
        }
        if (usersError !== null) {
          return (
            <Alert variant="danger">{`Fetch users error: ${usersError}`}</Alert>
          )
        }
        return (
          <>
            {users !== null && `${userId}` in users && (
              <UserCard {...users[`${userId}`]} />
            )}
          </>
        )
      })()}

      <h1 className="mt-3">Посты пользователя</h1>
      {(function () {
        if (postsLoading) {
          return <Spinner animation="border" variant="primary" />
        }
        if (postsError !== null) {
          return (
            <Alert variant="danger">{`Fetch posts error: ${postsError}`}</Alert>
          )
        }
        return (
          <>
            {posts !== null && <Posts data={posts} isShowPostHeader={false} />}
          </>
        )
      })()}
    </>
  )
}
