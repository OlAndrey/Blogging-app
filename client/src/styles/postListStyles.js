import { makeStyles } from '@mui/styles'

const usePostListStyles = makeStyles((theme) => ({
  'link-info': {
    display: 'inline-flex',
    cursor: 'pointer',
    padding: '6px 16px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderRadius:
      '4px;transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    color: '#fff',
    background: '#ed6c02',
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    '&:hover': {
      backgroundColor: '#e65100'
    }
  }
}))

export default usePostListStyles
