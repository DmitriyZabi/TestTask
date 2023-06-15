import { IComment } from '../../redux/comments/models'
import { Comment } from '../comment/Comment'
import { IProps } from './comments.model'
import styles from './Comments.module.scss'

export function Comments(props: IProps) {
  return (
    <div className={styles.comments}>
      {props.data.map((x: IComment) => (
        <Comment key={x.id} email={x.email} body={x.body} />
      ))}
    </div>
  )
}
