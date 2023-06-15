import Card from 'react-bootstrap/Card'
import { IProps } from './comment.model'

export function Comment(props: IProps) {
  return (
    <>
      <Card>
        <Card.Header as="h5">{props.email}</Card.Header>
        <Card.Body>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
