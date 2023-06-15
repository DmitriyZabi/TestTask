import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { IProps } from './post.model'
import image from '../../images/avatar.png'
import styles from './Post.module.scss'
import { NavLink } from 'react-router-dom'

export function Post(props: IProps) {
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
          <Button variant="primary">Comments</Button>
        </Card.Body>
      </Card>
    </>
  )
}
