import Form from 'react-bootstrap/Form'
import { IProps } from './search.model'

export function Search(props: IProps) {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setText(e.currentTarget.value)
  }

  return (
    <Form.Control
      placeholder={props.placeholder || ''}
      onChange={changeHandler}
      type="search"
    />
  )
}
