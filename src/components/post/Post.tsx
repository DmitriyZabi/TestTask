import Card from 'react-bootstrap/Card'
import { IProps } from './post.model'
import image from '../../images/avatar.png'
import styles from './Post.module.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { IStore } from '../../redux/store'
import { fetchCommentsRequest } from '../../redux/comments/actions'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { Comments } from '../comments/Comments'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { ChevronDown as ArrowIcon } from 'react-bootstrap-icons'

export function Post(props: IProps) {
  // comments
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSelector(
    (store: IStore) => store.comments
  )

  // states
  const [isCommentsOpened, setIsCommentsOpened] = useState(false)

  // methods
  const openComments = () => {
    setIsCommentsOpened(true)
  }

  const closeComments = () => {
    setIsCommentsOpened(false)
  }

  const toggleComments = () => {
    isCommentsOpened ? closeComments() : openComments()
  }

  // effects
  useEffect(() => {
    if (isCommentsOpened) {
      dispatch(fetchCommentsRequest(`${props.userId}`))
    }
  }, [isCommentsOpened])

  // avatar
  const avatar = new Image()
  avatar.src = image
  avatar.alt = 'Ava'

  return (
    <>
      <Card>
        <Card.Header as="h5">
          <NavLink to={`/userInfo/${props.userId}`}>
            <img className={styles.image} src={avatar.src} alt={avatar.src} />
          </NavLink>
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          <Card>
            <Card.Body>
              <Button
                className={[
                  styles.btnComments,
                  isCommentsOpened ? styles.opened : '',
                ]
                  .filter((x) => x != '')
                  .join(' ')}
                variant="secondary"
                onClick={toggleComments}
              >
                Comments
                <ArrowIcon className={styles.arrow} />
              </Button>
              {isCommentsOpened &&
                (function () {
                  if (isLoading) {
                    return (
                      <Spinner
                        animation="border"
                        variant="primary"
                        className="mt-3"
                      />
                    )
                  }
                  if (error !== null) {
                    return (
                      <Alert
                        className="mt-3"
                        variant="danger"
                      >{`Fetch comments error: ${error}`}</Alert>
                    )
                  }
                  return (
                    <>
                      {data !== null && `${props.userId}` in data && (
                        <Comments data={data[props.userId]} />
                      )}
                    </>
                  )
                })()}
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </>
  )
}
