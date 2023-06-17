import styles from './Avatar.module.scss'
import image from '../../images/avatar.png'

export function Avatar() {
  const avatar = new Image()
  avatar.src = image
  avatar.alt = 'Ava'
  return <img className={styles.avatar} src={avatar.src} alt={avatar.src} />
}
