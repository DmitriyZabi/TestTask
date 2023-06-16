import { useEffect, useState } from 'react'
import { IPost } from '../../redux/posts/models'
import { Post } from '../post/Post'
import { IProps } from './posts.model'
import styles from './Posts.module.scss'
import { Search } from '../search/Search'
import { Sort } from '../sort/Sort'
import { SortBy } from '../sort/sort.model'
import { Paginator } from '../paginator/Paginator'
import Alert from 'react-bootstrap/Alert'

export function Posts(props: IProps) {
  const filter = (data: IPost[]) => {
    if (!filterText) {
      return data
    }
    return data.filter((x) => x.title.includes(filterText))
  }
  const sort = (data: IPost[]) => {
    switch (sortType) {
      case SortBy.None:
        return data
      case SortBy.ASC:
        return data.sort((a, b) =>
          a.title < b.title ? -1 : a.title > b.title ? 1 : 0
        )
      case SortBy.DESC:
        return data.sort((a, b) =>
          a.title > b.title ? -1 : a.title < b.title ? 1 : 0
        )
      default:
        return data
    }
  }
  const paginate = (data: IPost[], pageSize = 3) => {
    return data.slice(
      (page - 1) * pageSize,
      page * pageSize >= data.length ? data.length : page * pageSize
    )
  }

  // const
  const pageSize = 10

  // states
  const [filterText, setFilterText] = useState('')
  const [sortType, setSortType] = useState(SortBy.None)
  const [page, setPage] = useState(1)

  // handlers
  const handlePageNumberChange = (page: number) => {
    setPage(page)
    window.scrollTo(0, 0)
  }

  // data
  const [data, setData] = useState([...props.data])
  useEffect(() => {
    setData(sort(filter([...props.data])))
    setPage(1)
  }, [filterText, sortType])

  return (
    <div className={styles.posts}>
      <div className={styles.settings}>
        <div className={styles.search}>
          <Search
            text={filterText}
            setText={setFilterText}
            placeholder="Поиск по заголовкам"
          />
        </div>
        <div className={styles.sort}>
          <Sort sortType={sortType} setSortType={setSortType} />
        </div>
        {data.length > 0 && (
          <div className={styles.pagination}>
            <Paginator
              page={page}
              count={Math.ceil(data.length / pageSize)}
              setPage={handlePageNumberChange}
            />
          </div>
        )}
      </div>

      <div className={styles.list}>
        {data.length ? (
          paginate(data, pageSize).map((x: IPost) => (
            <Post key={x.id} userId={x.userId} title={x.title} body={x.body} />
          ))
        ) : (
          <Alert variant="warning">Посты не найдены</Alert>
        )}
      </div>

      {data.length > 0 && (
        <div className={styles.settings}>
          <div className={styles.pagination}>
            <Paginator
              page={page}
              count={Math.ceil(data.length / pageSize)}
              setPage={handlePageNumberChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}
