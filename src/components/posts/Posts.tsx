import { IPost } from '../../redux/posts/models'
import { Post } from '../post/Post'
import { IProps } from './posts.model'
import styles from './Posts.module.scss'

export function Posts(props: IProps) {
  return (
    <div className={styles.posts}>
      {props.data.map((x: IPost) => (
        <Post key={x.id} userId={x.userId} title={x.title} body={x.body} />
      ))}
    </div>
  )
}
