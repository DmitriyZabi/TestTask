import { Card } from 'react-bootstrap'
import { IUser } from '../../redux/users/models'
import { Avatar } from '../avatar/Avatar'
import styles from './UserCard.module.scss'

export function UserCard(props: IUser) {
  return (
    <Card className={styles.userCard}>
      <Card.Header className={styles.header}>
        <Avatar />
        <div className="d-flex flex-column">
          <span className={styles.username}>{props.username}</span>
          <span className={styles.name}>{props.name}</span>
        </div>
        <div className={styles.contacts}>
          <span className={styles.phone}>{props.phone}</span>
          <span className={styles.email}>{props.email}</span>
        </div>
      </Card.Header>
      <Card.Body className={styles.body}>
        <div className={styles.company}>
          <span className={styles.title}>Company</span>
          <span>{props.company.name}</span>
          <span>{props.company.catchPhrase}</span>
          <span>{props.company.bs}</span>
        </div>
        <div className={styles.address}>
          <span className={styles.title}>Address</span>
          <span>{props.address.street}</span>
          <span>{props.address.suite}</span>
          <span>{props.address.city}</span>
          <span>{props.address.zipcode}</span>
        </div>
      </Card.Body>
    </Card>
  )
}
