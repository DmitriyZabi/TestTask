import { IProps, SortBy } from './sort.model'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { SortUp as UpIcon, SortDown as DownIcon } from 'react-bootstrap-icons'

export function Sort(props: IProps) {
  const clickASCHandler = () => {
    props.setSortType(props.sortType === SortBy.ASC ? SortBy.None : SortBy.ASC)
  }
  const clickDESCHandler = () => {
    props.setSortType(
      props.sortType === SortBy.DESC ? SortBy.None : SortBy.DESC
    )
  }

  return (
    <ButtonGroup aria-label="Basic example">
      <Button
        variant={props.sortType === SortBy.ASC ? 'success' : 'secondary'}
        onClick={clickASCHandler}
      >
        <UpIcon />
      </Button>
      <Button
        variant={props.sortType === SortBy.DESC ? 'success' : 'secondary'}
        onClick={clickDESCHandler}
      >
        <DownIcon />
      </Button>
    </ButtonGroup>
  )
}
