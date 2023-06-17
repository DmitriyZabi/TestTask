import Card from 'react-bootstrap/Card'
import { IProps } from './post.model'
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
import { Avatar } from '../avatar/Avatar'

export function Post(props: IProps) {
  // comments
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((store: IStore) => store.comments)

  const key = `${props.postId}`
  const data = useSelector((store: IStore) =>
    store.comments.data !== null && key in store.comments.data
      ? store.comments.data[key]
      : null
  )

  // states
  const [isCommentsOpened, setIsCommentsOpened] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // methods
  const openComments = () => {
    setIsCommentsOpened(true)
  }

  const closeComments = () => {
    setIsCommentsOpened(false)
    setIsReady(false)
  }

  const toggleComments = () => {
    isCommentsOpened ? closeComments() : openComments()
  }

  // effects
  useEffect(() => {
    if (isCommentsOpened) {
      dispatch(fetchCommentsRequest(key))
    }
  }, [isCommentsOpened])

  useEffect(() => {
    if (!isLoading && data !== null) {
      setIsReady(true)
    }
  }, [data, error])

  return (
    <Card>
      {props.isShowHeader && (
        <Card.Header>
          <NavLink to={`/userInfo/${props.userId}`}>
            <Avatar />
          </NavLink>
        </Card.Header>
      )}
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
              disabled={isLoading}
            >
              Комментарии
              <ArrowIcon className={styles.arrow} />
            </Button>
            {isCommentsOpened &&
              (function () {
                if (!isReady && isLoading) {
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

                if (data !== null && !data.length) {
                  return (
                    <Alert className="mt-3" variant="warning">
                      Комментарии не найдены
                    </Alert>
                  )
                }

                return <>{data !== null && <Comments data={data} />}</>
              })()}
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  )
}
