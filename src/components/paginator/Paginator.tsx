import { IProps } from './paginator.model'
import Pagination from 'react-bootstrap/Pagination'

export function Paginator(props: IProps) {
  return (
    <Pagination className="d-flex">
      <Pagination.First
        disabled={props.page === 1}
        onClick={() => props.setPage(1)}
      />
      <Pagination.Prev
        disabled={props.page === 1}
        onClick={() => props.setPage(props.page - 1)}
      />
      {props.page === props.count && props.page - 4 > 0 && (
        <Pagination.Item onClick={() => props.setPage(props.page - 4)}>
          {props.page - 4}
        </Pagination.Item>
      )}
      {props.page >= props.count - 1 && props.page - 3 > 0 && (
        <Pagination.Item onClick={() => props.setPage(props.page - 3)}>
          {props.page - 3}
        </Pagination.Item>
      )}
      {props.page - 2 > 0 && (
        <Pagination.Item onClick={() => props.setPage(props.page - 2)}>
          {props.page - 2}
        </Pagination.Item>
      )}
      {props.page - 1 > 0 && (
        <Pagination.Item onClick={() => props.setPage(props.page - 1)}>
          {props.page - 1}
        </Pagination.Item>
      )}
      <Pagination.Item active>{props.page}</Pagination.Item>
      {props.page + 1 <= props.count && (
        <Pagination.Item onClick={() => props.setPage(props.page + 1)}>
          {props.page + 1}
        </Pagination.Item>
      )}
      {props.page + 2 <= props.count && (
        <Pagination.Item onClick={() => props.setPage(props.page + 2)}>
          {props.page + 2}
        </Pagination.Item>
      )}
      {props.page <= 2 && props.page + 3 <= props.count && (
        <Pagination.Item onClick={() => props.setPage(props.page + 3)}>
          {props.page + 3}
        </Pagination.Item>
      )}
      {props.page <= 1 && props.page + 4 <= props.count && (
        <Pagination.Item onClick={() => props.setPage(props.page + 4)}>
          {props.page + 4}
        </Pagination.Item>
      )}
      <Pagination.Next
        disabled={props.count < props.page + 1}
        onClick={() => props.setPage(props.page + 1)}
      />
      <Pagination.Last
        disabled={props.page === props.count}
        onClick={() => props.setPage(props.count)}
      />
    </Pagination>
  )
}
