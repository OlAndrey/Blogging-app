import React from 'react'
import { Button, Grid, Link, Paper, Typography } from '@mui/material'
import usePostListStyles from '../styles/postListStyles'

const PostsList = (props) => {
  const classes = usePostListStyles()

  return (
    <Paper
      variant="outlined"
      sx={{
        width: 'calc(100% - 0.5em)',
        boxSizing: 'border-box',
        margin: '.5em',
        padding: '.75em'
      }}
    >
      <Link
        href={'/post/' + props.article._id}
        underline="hover"
        variant="h4"
        color="black"
      >
        {props.article.title}
      </Link>
      <Typography variant="body1">{props.article.paragraph}</Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        my={'.25em'}
        alignItems={'center'}
      >
        <Grid item xs={6}>
          <Typography variant="h6">{props.article.author}</Typography>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
          <Typography variant="body1">
            {props.article.createdAt.toLocaleDateString()}
          </Typography>
        </Grid>
      </Grid>

      {!props.own ? (
        ''
      ) : (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          my={'.5em'}
          alignItems={'center'}
        >
          <Grid item xs={6}>
            <Link
              href={'/edit/' + props.article.id}
              className={classes['link-info']}
              sx={{ color: 'white' }}
              underline="none"
            >
              Edit Article
            </Link>
          </Grid>
          <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
            <Button
              variant="contained"
              color="error"
              sx={{ padding: { xs: '6px 6px', sm: '6px 16px' } }}
            >
              Delete Article
            </Button>
          </Grid>
        </Grid>
      )}
    </Paper>
  )
}

export default PostsList
