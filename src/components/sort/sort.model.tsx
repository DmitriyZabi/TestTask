export enum SortBy {
  None = 'none',
  ASC = 'asc',
  DESC = 'DESC',
}

export interface IProps {
  sortType: SortBy
  setSortType(sortType: SortBy): void
}
