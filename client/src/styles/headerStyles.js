import { makeStyles } from '@mui/styles'

const useHeaderStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0
    }
  },
  logo: {
    fontWeight: 600,
    color: '#FFFEFE'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerContainer: {
    padding: '1em 2em'
  }
}))

export default useHeaderStyles
