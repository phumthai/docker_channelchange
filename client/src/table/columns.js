import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'AP Name',
    Footer: 'AP Name',
    accessor: 'apname',
    sticky: 'left'
  },
  {
    Header: 'Count',
    Footer: 'Count',
    accessor: 'apcount',
    sticky: 'left'
  }
]

export const COLUMNS2 = [
  {
    Header: 'Date',
    Footer: 'Date',
    accessor: 'fulldate',
    sticky: 'left',
    Cell: ({ value }) => {
      return format(new Date(value), 'dd/MM/yyyy HH:mm:ss')
    }
  },
  {
    Header: 'AP Name',
    Footer: 'AP Name',
    accessor: 'apname',
    sticky: 'left'
  },
  {
    Header: 'Channal 2.4G',
    Footer: 'Channal 2.4G',
    accessor: 'channel24',
    sticky: 'left'
  },
  {
    Header: 'Power 2.4G',
    Footer: 'Power 2.4G',
    accessor: 'power24',
    sticky: 'left'
  },
  {
    Header: 'Channal 5G',
    Footer: 'Channal 5G',
    accessor: 'channel5',
    sticky: 'left'
  },
  {
    Header: 'Power 2.4G',
    Footer: 'Power 2.4G',
    accessor: 'power5',
    sticky: 'left'
  }
]